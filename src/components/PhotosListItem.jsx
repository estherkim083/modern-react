import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

export default function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation(photo);
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img src={photo.url} alt="random pic" className="h-20 v-20" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>
  );
}
