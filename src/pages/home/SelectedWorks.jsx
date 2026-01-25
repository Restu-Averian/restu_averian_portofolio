import { forwardRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import SelectedWorksStyled from "../../styled/home/SelectedWorks.styled";
import ListProjects from "../../components/home/selected-works/ListProjects";
import Button from "../../components/global/Button";
import TitleSection from "../../components/global/TitleSection";

const SelectedWorks_ = (_, ref) => {
  const navigate = useNavigate();

  return (
    <SelectedWorksStyled aria-labelledby="selected-works" ref={ref}>
      <TitleSection
        title="Selected Works"
        description="Lorem ipsum dolor sir amet something word should put in here"
        style={{
          marginBottom: 52,
        }}
      />

      <ListProjects />

      <Button
        variant="outline"
        style={{
          margin: "48px auto 0",
        }}
        icon="arrow-right"
        renderAs="button"
        size="medium"
        onClick={() => {
          navigate("/project");
        }}
      >
        VIEW ALL PROJECTS
      </Button>
    </SelectedWorksStyled>
  );
};

const SelectedWorks = memo(forwardRef(SelectedWorks_));
export default SelectedWorks;
