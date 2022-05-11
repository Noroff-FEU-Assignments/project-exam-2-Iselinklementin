import styled from "styled-components";

export const StyledTabs = styled.div`
  .nav-link {
    color: ${(props) => props.theme.body};
    text-transform: uppercase;
    font-size: 14px;
  }

  .nav-link.active {
    background-color: #fc5156;
    color: white;
  }

  button::after {
    background-image: none;
  }

  .accordion-button:not(.collapsed)::after {
    background-image: none;
  }
`;
// url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")
