import React, { useState, useContext, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import useAxios from "hooks/useAxios";
import { API_URL, MEDIA_URL } from "constants/api";
import AuthContext from "context/AuthContext";
import Image from "next/image";
import { schema } from "utils/schemaValidation/AddFormSchema";
import { STAYS, REVIEW, ROOMS } from "constants/misc";
import { StyledForm } from "./Form.styles";
import { Form } from "react-bootstrap";
import Heading from "components/typography/Heading";
import Icon, { icons } from "constants/icons";
import { StyledFormButton } from "components/common/buttons/Button.styles";
import { UploadLabel } from "components/common/buttons/FileUploader";
import { StyledImageContainer } from "styles/pages/home/admin/Add/StyledImageContainer";

function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("");
  const [roomType, setRoomType] = useState("");
  //
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  //
  const imgUpload1 = useRef(null);
  const imgUpload2 = useRef(null);
  const imgUpload3 = useRef(null);
  const imgUpload4 = useRef(null);

  let http = useAxios();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let imgArray = {
    image_1: 1234,
    image_2: 1234,
    image_3: 1234,
    image_4: 1234,
  };

  async function onSubmit(data) {
    let file1 = imgUpload1.current.files[0];
    let file2 = imgUpload2.current.files[0];
    let file3 = imgUpload3.current.files[0];
    let file4 = imgUpload4.current.files[0];

    const AddImages = (file, title, caption) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("caption", caption);
      formData.append("file", file);
      return formData;
    };

    let imageOne = AddImages(file1, "Tester tittel 100", "Tester caption 1100");
    let imageTwo = AddImages(file2, "Tester tittel 2", "Tester caption 200");
    let imageThree = AddImages(file3, "Tester tittel 3", "Tester caption 300");
    let imageFour = AddImages(file4, "Tester tittel 4", "Tester caption 400");

    await http.post(MEDIA_URL, imageOne).then((response) => {
      const thisID = response.data.id;
      imgArray.image_1 = thisID;
    });

    await http.post(MEDIA_URL, imageTwo).then((response) => {
      const thisID = response.data.id;
      imgArray.image_2 = thisID;
    });

    await http.post(MEDIA_URL, imageThree).then((response) => {
      const thisID = response.data.id;
      imgArray.image_3 = thisID;
    });

    await http.post(MEDIA_URL, imageFour).then((response) => {
      const thisID = response.data.id;
      imgArray.image_4 = thisID;
    });

    data = {
      status: "publish",
      title: data.title,

      fields: {
        title: data.title,
        stay_description: data.description,
        price: data.price,
        featured: data.featured,
        address: {
          full_address: data.full_address,
          short_description: data.short_description,
        },
        nice_to_know: {
          check_in: data.check_in,
          checkout: data.checkout,
          handicap_friendly: data.handicap_friendly,
          no_smoking: data.no_smoking,
        },
        nice_text: data.text,
        room: {
          room_info: data.room_info,
          room_type: roomType,
          stay_type: type,
        },
        stars: data.stars.value,
        stay_includes: {
          wifi: data.wifi,
          kitchen: data.kitchen,
          free_parking: data.free_parking,
          breakfast: data.breakfast,
          swimming_pool: data.swimming_pool,
          pet_friendly: data.pet_friendly,
        },
        image: {
          image_1: imgArray.image_1,
          image_2: imgArray.image_2,
          image_3: imgArray.image_3,
          image_4: imgArray.image_4,
        },
      },
    };

    // Ordne en success melding og error

    await http
      .post(API_URL, data)
      .then((response) => {
        console.log(response.data);
        console.log(data);
      })
      .catch((error) => {
        setError(error.toString());
      });
    setSubmitting(true);
  }

  const onChangeHandler = (value) => {
    setType(value.label);
  };

  const changeHandler = (value) => {
    setRoomType(value.label);
  };

  const createHtml = (type) => {
    console.log(type);
    if (type === "Hotel") {
      return (
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.hotel)} fontSize="24px" className="me-3" />
            <Controller
              name="room_type"
              control={control}
              render={({ field }) => (
                <Select
                  name="room_type"
                  className="select"
                  options={ROOMS}
                  defaultValue={{ value: "0", label: "Type of room" }}
                  {...field}
                  onChange={(e) => {
                    changeHandler(e);
                  }}
                />
              )}
            />
          </div>
        </Form.Group>
      );
    } else if (type === "Apartment" || type === "Bed & Breakfast") {
      return (
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.apartment)} fontSize="24px" className="me-3" />
            <Form.Control label="room_info" type="text" placeholder="Room info" {...register("room_info")} />
          </div>
        </Form.Group>
      );
    }

    return "";
  };

  return (
    <>
      {submitting}
      <StyledForm className="add-form mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.title)} fontSize="22px" className="me-3" />
            <Form.Control label="stay_title" type="text" placeholder="Title" {...register("title")} />
            {/* {errors.title && (
              <StyledFeedbackContainer>
                <Icon
                  icon={icons.map(icon => icon.error)}
                  color="#D11117"
                  className="warning-icon"
                />
                <Alertbox className="mt-2">{errors.title.message}</Alertbox>
              </StyledFeedbackContainer>
            )} */}
          </div>
        </Form.Group>
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.price)} fontSize="20px" className="me-3" />
            <Form.Control label="price" type="text" placeholder="Price" {...register("price")} />
          </div>
        </Form.Group>
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.hotel)} fontSize="24px" className="me-3" />
            <Controller
              name="stay_type"
              control={control}
              render={({ field }) => (
                <Select
                  defaultValue={{ value: "0", label: "Stay type" }}
                  className="select"
                  options={STAYS}
                  {...field}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              )}
            />
          </div>
        </Form.Group>
        {createHtml(type)}

        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.location)} fontSize="24px" className="me-3" />
            <Form.Control label="full_address" type="text" placeholder="Full address" {...register("full_address")} />
          </div>
        </Form.Group>
        <Form.Group className="mt-3">
          <div className="d-flex align-items-center">
            <Icon icon={icons.map((icon) => icon.location)} fontSize="24px" className="me-3" />
            <Form.Control
              label="short_description"
              type="text"
              placeholder="Location"
              {...register("short_description")}
            />
          </div>
        </Form.Group>
        <Form.Group className="mt-3">
          <div className="text-area-container">
            <Icon icon={icons.map((icon) => icon.text)} fontSize="22px" className="me-3" />
            <Form.Control
              as="textarea"
              rows={6}
              label="description"
              onKeyUp={(e) => setCount(e.target.value.length)}
              placeholder="Description"
              {...register("description")}
            />
            <span className="counter">{count}/20</span>
          </div>
        </Form.Group>
        <Form.Group className="mt-5">
          <div className="text-area-container">
            <Icon icon={icons.map((icon) => icon.text)} fontSize="22px" className="me-3" />
            <Form.Control
              as="textarea"
              label="text"
              rows={3}
              onKeyUp={(e) => setCounter(e.target.value.length)}
              type="text"
              placeholder="Nice to know"
              {...register("text")}
            />
            <span className="counter">{counter}/20</span>
          </div>
        </Form.Group>
        <Form.Group className="mt-5">
          <div className="text-area-container">
            <Icon icon={icons.map((icon) => icon.star)} fontSize="22px" className="me-3 mt-3" />
            <Controller
              name="stars"
              control={control}
              render={({ field }) => (
                <Select
                  className="select"
                  name="stars"
                  options={REVIEW}
                  defaultValue={{ value: "0", label: "Review" }}
                  {...field}
                />
              )}
            />
          </div>
        </Form.Group>
        <hr />
        <div className="d-flex">
          <Icon icon={icons.map((icon) => icon.heart)} fontSize="18px" className="me-3" />
          <Heading size="3">Keywords</Heading>
        </div>
        <div className="checkboxes mb-5">
          <Form.Check name="featured" label="Featured" {...register("featured")} />
          <Form.Check name="wifi" label="Wifi" {...register("wifi")} />
          <Form.Check name="kitchen" label="Kitchen" {...register("kitchen")} />
          <Form.Check name="free_parking" label="Free parking" {...register("free_parking")} />
          <Form.Check name="breakfast" label="Breakfast" {...register("breakfast")} />
          <Form.Check name="swimming_pool" label="Swimming pool" {...register("swimming_pool")} />
          <Form.Check name="pet_friendly" label="Pet friendly" {...register("pet_friendly")} />
        </div>
        <hr />
        <div className="d-flex">
          <Icon icon={icons.map((icon) => icon.heart)} fontSize="18px" className="me-3" />
          <Heading size="3">Nice to know</Heading>
        </div>
        <div className="checkboxes mb-5">
          <Form.Check name="no_smoking" label="No smoking" {...register("no_smoking")} />
          <Form.Check name="handicap_friendly" label="Handicap friendly" {...register("handicap_friendly")} />
        </div>
        <div className="d-flex align-items-center  mb-5 mt-4">
          <Icon icon={icons.map((icon) => icon.checkout)} fontSize="18px" className="me-3" />
          <Form.Group className="mt-3 me-5">
            <Form.Control label="check_in" type="text" placeholder="check in" {...register("check_in")} />
          </Form.Group>
          <Icon icon={icons.map((icon) => icon.checkout)} fontSize="18px" className="me-3" />
          <Form.Group className="mt-3">
            <Form.Control label="checkout" type="text" placeholder="checkout" {...register("checkout")} />
          </Form.Group>
        </div>
        <hr />
        <div className="d-flex mb-5">
          <Icon icon={icons.map((icon) => icon.images)} fontSize="26px" className="me-3" />
          <Heading size="3">Images</Heading>
        </div>
        {/* FØRSTE BILDE */}
        <div className="d-flex flex-column align-items-center mt-4">
          <StyledImageContainer>
            {img1 ? (
              <Image src={img1} alt="image" layout="fill" objectFit="cover" {...register("images")} />
            ) : (
              <div className="img-placeholder">
                <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="white" />
              </div>
            )}
          </StyledImageContainer>
          <UploadLabel htmlFor="imgUpload1">Upload image</UploadLabel>
          <Form.Control
            id="imgUpload1"
            type="file"
            name="image_1"
            ref={imgUpload1}
            onChange={(e) => setImg1(URL.createObjectURL(e.target.files[0]))}
            style={{ opacity: "0" }}
          />
          {/* <FileUploader setImg={setImg1} ref={imgUpload1} uploadBtn="img1" name="image_1" /> */}
        </div>

        {/* ANDRE BILDE */}
        <div className="d-flex flex-column align-items-center mt-4">
          <StyledImageContainer>
            {img2 ? (
              <Image src={img2} alt="image" layout="fill" objectFit="cover" {...register("images")} />
            ) : (
              <div className="img-placeholder">
                <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="white" />
              </div>
            )}
          </StyledImageContainer>
          <UploadLabel htmlFor="imgUpload2">Upload image</UploadLabel>
          <Form.Control
            id="imgUpload2"
            type="file"
            name="image_2"
            ref={imgUpload2}
            onChange={(e) => setImg2(URL.createObjectURL(e.target.files[0]))}
            style={{ opacity: "0" }}
          />
          {/* <FileUploader setImg={setImg2} ref={imgUpload2} uploadBtn="img2" name="image_2" /> */}
        </div>

        {/* TREDJE BILDE */}
        <div className="d-flex flex-column align-items-center mt-4">
          <StyledImageContainer>
            {img3 ? (
              <Image src={img3} alt="image" layout="fill" objectFit="cover" {...register("images")} />
            ) : (
              <div className="img-placeholder">
                <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="white" />
              </div>
            )}
          </StyledImageContainer>
          <UploadLabel htmlFor="imgUpload3">Upload image</UploadLabel>
          <Form.Control
            id="imgUpload3"
            type="file"
            name="image_3"
            ref={imgUpload3}
            onChange={(e) => setImg3(URL.createObjectURL(e.target.files[0]))}
            style={{ opacity: "0" }}
          />
          {/* <FileUploader setImg={setImg3} ref={imgUpload3} uploadBtn="img3" name="image_3" /> */}
        </div>

        {/* FJERDE BILDE */}
        <div className="d-flex flex-column align-items-center mt-4">
          <StyledImageContainer>
            {img4 ? (
              <Image src={img4} alt="image" layout="fill" objectFit="cover" {...register("images")} />
            ) : (
              <div className="img-placeholder">
                <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="white" />
              </div>
            )}
          </StyledImageContainer>
          <UploadLabel htmlFor="imgUpload4">Upload image</UploadLabel>
          <Form.Control
            id="imgUpload4"
            type="file"
            name="image_4"
            ref={imgUpload4}
            onChange={(e) => setImg4(URL.createObjectURL(e.target.files[0]))}
            style={{ opacity: "0" }}
          />
          {/* <FileUploader setImg={setImg4} ref={imgUpload4} uploadBtn="img4" name="image_4" /> */}
        </div>

        <StyledFormButton className="mb-4 mt-5" type="submit">
          {submitting ? "Adding stay.." : "Add stay"}
          <Icon icon={icons.map((icon) => icon.plus)} color="white" fontSize="20px" className="ms-12" />
        </StyledFormButton>
      </StyledForm>
    </>
  );
}

export default AddForm;

// console.log(imgArray);

// await http.post(MEDIA_URL, formData3).then(response => {
//   const thisID = response.data.id;
//   // console.log(thisID);
// });

// await http.post(MEDIA_URL, formData4).then(response => {
//   const thisID = response.data.id;
//   // console.log(thisID);
// });
