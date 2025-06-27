import CommentForm from "@/components/forms/comment-form";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import CommentCard from "../comment-card";
import { useQueryData } from "@/hooks/useQueryData";
import { getVideoComments } from "@/actions/user";
import { VideoCommentProps } from "@/types/index.types";

type Props = {
  author: string;
  videoId: string;
};

const Activities = ({ author, videoId }: Props) => {
  const { data } = useQueryData(["video-comments"], () => {
    getVideoComments(videoId);
  });

  const { data: comments } = data as VideoCommentProps;

  return (
    <TabsContent
      value="Activity"
      className="p-5 bg-[#1D1D1D] rounded-xl flex flex-col gap-y-5"
    >
      <CommentForm author={author} videoId={videoId} />
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment.comment}
          author={{
            image: comment.User?.image || "",
            firstname: comment.User?.firstname || "",
            lastname: comment.User?.lastname || "",
          }}
          videoId={videoId}
          commentId={comment.id}
          reply={comment.Replies || []}
          isReply={false}
        />
      ))}
    </TabsContent>
  );
};

export default Activities;
