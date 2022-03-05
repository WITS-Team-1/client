import styled from 'styled-components';

export default styled.div`
  cursor: pointer;
  transition: all 250ms ease-in;
  background-color: ${({ active }) => (active ? '#2f2f2f' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '333')};
  transform: scale(${({ active }) => (!active ? 1 : 1.3)});
  box-shadow: 0 0 2px 1px #555;
  display: flex;
  justify-content: center;
  align-items: center;

  /*square components*/
  width: 10px;
  height: 10px;
  margin: 10px 10px;

  /*making it a circle/dot */
  border-radius: 20px;
`;
