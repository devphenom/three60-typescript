import styled from "styled-components";
interface CategoryObj {
  tagColor: string;
  color: string;
}
interface TodoProps {
  category: CategoryObj;
}

export const StyledTodo = styled.div<TodoProps>`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  flex-wrap: wrap;

  #todo {
    p {
      &:last-child {
        font-size: 0.8rem;
        margin-top: 0.3rem;
        font-weight: lighter;
      }
    }
  }

  #tag {
    padding: 10px 20px;
    font-size: 0.9rem;
    text-align: center;
    background: ${({ category }) => category.tagColor};
    color: ${({ category }) => category.color};
    border-radius: 30px;
  }

  #more {
    display: inline-block;
    border: none;
    padding: 1rem;
    margin: 0;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    background: none;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    /* z-index: 1; */

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: white;
      min-width: 200px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      .dropdown-item {
        text-align: left;
        color: black;
        padding: 20px 10px;
        text-decoration: none;
        display: block;

        :hover {
          background: rgba(119, 119, 119, 0.04);
        }
      }
    }

    &:hover .dropdown-content {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    #todo {
      width: 100%;
    }
  }
`;
