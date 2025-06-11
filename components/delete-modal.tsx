/* eslint-disable @typescript-eslint/ban-ts-comment */
import Button from "./Button";
import TrashIcon from "../icons/Trash.icon";
import { Modal } from "antd";
import React from "react";
import { toast } from "sonner";

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  path?: string;
}

export const DeleteAssetModal: React.FC<ModalProps> = ({
  show,
  onClose,
  path,
}) => {

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!path) {
      toast.error("Asset path is missing.");
      return;
    }
    const payload = { path };
    console.log("Deleting asset at path:", payload);
  };

  return (
    <Modal
      title=<div className="flex justify-start items-start gap-4">
        <div className="h-12 flex items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-[28px] bg-error-100 border-8 border-error-50">
            <TrashIcon />
          </div>
        </div>
        <div>
          <p className="text-base sm:text-lg !font-dmSans font-bold text-black">
            Delete Asset!
          </p>
          <p className="text-sm text-gray-600 !font-dmSans !font-normal">
            Are you sure you want to delete this image? This action cannot be
            undone.
          </p>
        </div>
      </div>
      open={show}
      onCancel={() => onClose()}
      footer={null}
    >
      <div className="w-full pt-5">
        <div className="w-full flex justify-end items-center gap-3">
          <Button
            intent="secondary"
            title="Cancel"
            onClick={() => onClose()}
            className="text-base font-medium text-gray-700 border border-gray-300 !font-dmSans h-11"
          />
          <Button
            intent="secondary"
            title="Delete"
            onClick={handleSubmit}
            isLoading={false}
            className="text-base font-medium text-white bg-error-600 border-error-600 !font-dmSans h-11"
          />
        </div>
      </div>
    </Modal>
  );
};
