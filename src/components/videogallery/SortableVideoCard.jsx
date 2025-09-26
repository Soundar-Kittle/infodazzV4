"use client";

import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { toast } from "react-toastify";
import axios from "axios";
import { Switch } from "@/components/ui/switch";

const SortableVideoCard = ({ video, onStatusToggle }) => {
  const { setNodeRef, transform, transition, attributes, listeners } = useSortable({
    id: video.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [status, setStatus] = useState(Number(video.status || 0));
  const [checked, setChecked] = useState(false);



  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white shadow-md rounded overflow-hidden border"
    >
      {/* Draggable area */}
      <div {...attributes} {...listeners} className="cursor-move select-none">
        <img
          src={video.thumbnail_url || "/fallback.jpg"}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-2">
          <p className="text-sm font-medium line-clamp-2">{video.title}</p>
        </div>
      </div>

      {/* Non-draggable area */}
      <div className="flex items-center justify-between px-2 pb-2 pt-1">
        <span className={`text-xs font-semibold ${status ? "text-green-600" : "text-red-500"}`}>
          {status ? "Active" : "Inactive"}
        </span>
        <Switch
          className="cursor-pointer"
          checked={status === 1}
          onCheckedChange={async (checked) => {
            const newStatus = checked ? 1 : 0;
            setStatus(newStatus); // Optimistically update UI
            try {
              const res = await axios.post("/api/videogallery/toggle", {
                video_id: video.video_id,  // ✅ Correct key
                status: newStatus,
              });

              if (res.status === 200) {
                toast.success("Status updated");
                onStatusToggle?.(); // Optional refresh
              } else {
                toast.error("Failed to update status");
                setStatus(status); // Revert if failed
              }
            } catch (error) {
              console.error("Toggle error:", error);
              toast.error("Toggle failed");
              setStatus(status); // Revert on error
            }
          }}
        />
      </div>
    </div>
  );
};

export default SortableVideoCard;
