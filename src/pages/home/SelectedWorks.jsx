import { memo } from "react";
import SelectedWorksStyled from "../../styled/home/SelectedWorks.styled";
import ListProjects from "../../components/home/selected-works/ListProjects";
import Button from "../../components/global/Button";

const SelectedWorks_ = () => {
  return (
    <SelectedWorksStyled aria-labelledby="selected-works">
      <h2 className="title-section">Selected Works</h2>
      <p className="description-section">
        Lorem ipsum dolor sir amet something word should put in here
      </p>

      <ListProjects />

      <Button
        variant="outline"
        style={{
          margin: "48px auto 0",
        }}
        icon="arrow-right"
      >
        VIEW ALL PROJECTS
      </Button>
    </SelectedWorksStyled>
  );
};

const SelectedWorks = memo(SelectedWorks_);
export default SelectedWorks;
