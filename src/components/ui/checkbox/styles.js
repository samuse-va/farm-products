import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

// export const Label = styled.label`
//   position: relative;
//   display: flex;
//   padding-top: 15px;
//   padding-bottom: 14px;
//   cursor: pointer;

//   &::after {
//     content: "";
//     position: absolute;
//     right: 0;
//     width: 24px;
//     height: 24px;
//     background-repeat: no-repeat;
//     background-size: contain;

//     ${(props) =>
//       props.$isChecked
//         ? css`
//             background-image: url(${on});
//           `
//         : css`
//             background-image: url(${off});
//           `}
//   }
// `;
