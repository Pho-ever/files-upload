import { useState } from "react";
import { Modal } from "antd";
import { toast } from "sonner";
import Button from "../components/Button";

const DeleteSegment = ({
  id,
  refetch,
}: {
  id: string;
  refetch: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        title="Delete segment"
        className="text-[#FA5D5D] border-[#FA5D5D] text-sm border w-[76px]"
        intent={"secondary"}
        onClick={showModal}
      />
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        closable={false}
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="76" height="76" rx="38" fill="#991b1b" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.824 27L49.222 54.234C49.1623 55.2528 48.7155 56.2102 47.973 56.9103C47.2305 57.6104 46.2485 58.0002 45.228 58H30.772C29.7515 58.0002 28.7695 57.6104 28.027 56.9103C27.2845 56.2102 26.8377 55.2528 26.778 54.234L25.18 27H21V25C21 24.7348 21.1054 24.4804 21.2929 24.2929C21.4804 24.1054 21.7348 24 22 24H54C54.2652 24 54.5196 24.1054 54.7071 24.2929C54.8946 24.4804 55 24.7348 55 25V27H50.824ZM34 19H42C42.2652 19 42.5196 19.1054 42.7071 19.2929C42.8946 19.4804 43 19.7348 43 20V22H33V20C33 19.7348 33.1054 19.4804 33.2929 19.2929C33.4804 19.1054 33.7348 19 34 19ZM32 32L33 50H36L35.2 32H32ZM41 32L40 50H43L44 32H41Z"
                fill="white"
              />
            </svg>
          </div>
          <h2 className="leading-tight text-base text-center text-[#384455] font-semibold">
            Do you want to delete this segment?
          </h2>
          <div className="w-full flex justify-center">
            <p className="text-sm text-gray-600 mt-2 text-center max-w-[306px]">
              This action is irreversible and the segment will be permanently
              deleted
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button
              title="Cancel"
              intent={"secondary"}

              // className="bg-[#ECE9E9] border-[#ECE9E9] h-12"
              onClick={handleCancel}
            />
            <Button
              title="Delete workspace"
            //   isLoading={DeleteSegmentMutation.isPending}
            //   onClick={() => handleSubmit(id)}
              className="h-12 font-bold text-[#fff] border-red-800 bg-red-800"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteSegment;
