import React from "react";
import { Button } from "../common/Button";
import Solutions from "../static/Solutions";
import LinkSection from "../common/LinkSection";

const Products = () => {
  return (
    <div className="flex flex-col py-[48px] gap-12">
      <div className="text-xl font-semibold">Products & Solutions</div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-6xl font-semibold">Askitect AI</div>
          <div className="text-lg font-normal">
            Aenean tristique, tellus id posuere tincidunt, enim tortor
            scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam
            tincidunt nisl sed quam tempor.
          </div>
        </div>

        <Button onClick={() => {}} variant="primary" showIcon={true}>
          Try Now
        </Button>
      </div>
      <Solutions />
      <div className="flex flex-col gap-8">
        <div className="text-4xl font-semibold">
          You may need our services if you want to:
        </div>
        <div className="flex  gap-8 items-start  flex-wrap text-lg w-full">
          <LinkSection to="">Purchase Evaluation</LinkSection>
          <LinkSection to="">Pre Construction Consultation</LinkSection>
          <LinkSection to="">Construction Quality Evaluation</LinkSection>
        </div>
      </div>
    </div>
  );
};

export default Products;
