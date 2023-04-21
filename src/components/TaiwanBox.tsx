import theme from '@/utils/theme';
import styled from '@emotion/styled';
import React from 'react';

const TaiwanTextBox = styled('div')`
  position: fixed;
  left: -380px;
  top: 485px;
  z-index: -1;
  overflow: visible;
  ${theme.breakpoints.up('lg')} {
    left: 150px;
  }
  ${theme.breakpoints.up('md')} {
    left: -380px;
  }
`;

const TaiwanText = styled('p')`
  width: 970px;
  height: 150px;
  font-family: 'Ubuntu';
  font-weight: 700;
  font-size: 200px;
  line-height: 74.4%;
  letter-spacing: 0.18em;
  background: linear-gradient(90.07deg, #e60000 0.07%, #ffcc00 30.94%, #007f00 65.61%, #0000cc 99.94%);
  background-clip: text;
  text-fill-color: transparent;
  transform: rotate(90deg);
  flex: none;
  order: 0;
  flex-grow: 0;

  ${theme.breakpoints.down('md')} {
    width: 970px;
    height: 150px;
    background: linear-gradient(
      90.07deg,
      rgba(230, 0, 0, 0.12) 0.07%,
      rgba(255, 204, 0, 0.12) 30.94%,
      rgba(0, 127, 0, 0.12) 65.61%,
      rgba(0, 0, 204, 0.12) 99.94%
    );
    background-clip: text;
    text-fill-color: transparent;
    transform: rotate(90deg);
    /* Inside auto layout */
  }
`;

export default function TaiwanBox() {
  return (
    <TaiwanTextBox>
      <TaiwanText>TAIWAN</TaiwanText>
    </TaiwanTextBox>
  );
}
