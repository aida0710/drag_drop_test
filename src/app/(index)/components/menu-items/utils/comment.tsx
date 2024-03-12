interface CommentProps {
    comment: string;
}

export const Comment = ({comment}: CommentProps) => {
    return <p className='text-xs text-gray-500'>{comment}</p>;
};
