import { Icon } from "@iconify/react";
import { memo } from "react";
import Button from "../global/Button";

const ProjectDetailContent_ = ({ detailProject }) => {
  return (
    <div className="pd__content">
      <h1 className="pd__content-title-project">{detailProject?.title}</h1>

      <ul className="pd__content-list-tech-stack">
        {detailProject?.techStacks?.map((item, idxItem) => {
          return (
            <li className="pd__content-list-tech-stack-item" key={idxItem}>
              <Icon
                icon={item?.icon}
                className="pd__content-list-tech-stack-item-icon"
              />
              <span className="pd__content-list-tech-stack-item-text">
                {item?.label}
              </span>
            </li>
          );
        })}
      </ul>

      <p className="pd__content-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        consectetur architecto iste, labore quibusdam inventore doloribus quas!
        Quidem cum possimus ratione mollitia enim. Iusto fugit nemo saepe quae
        dignissimos? Cumque?
      </p>

      <Button
        type="primary"
        containerAttrs={{
          className: "wrapper-btn-try-demo",
        }}
      >
        Try Demo
      </Button>
    </div>
  );
};

const ProjectDetailContent = memo(ProjectDetailContent_);
export default ProjectDetailContent;
