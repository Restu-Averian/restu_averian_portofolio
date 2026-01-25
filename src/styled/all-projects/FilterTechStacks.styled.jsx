import styled from "styled-components";

const FilterTechStacks = styled.ul`
  display: flex;
  gap: 8px;

  li {
    list-style: none;
    border: 1px solid rgba(var(--primary-color-code));
    border-radius: 12px;
    cursor: pointer;
    padding: 8px 20px;

    &.selected {
      background-color: rgba(var(--primary-color-code));
      color: white;
    }
  }
`;

export default FilterTechStacks;
