
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, MessageCircle, Share } from "lucide-react";

interface PostCardProps {
  username: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostCard = ({
  username,
  avatar,
  time,
  content,
  image,
  likes,
  comments,
  shares,
}: PostCardProps) => {
  return (
    <Card className="mb-4 overflow-hidden">
      <CardHeader className="p-4 flex flex-row items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar} alt={username} />
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="font-semibold">{username}</p>
          <p className="text-sm text-muted-foreground">{time}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="mb-3">{content}</p>
        {image && (
          <div className="rounded-md overflow-hidden mb-2">
            <img
              src={image}
              alt="Фото поста"
              className="w-full object-cover max-h-96"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="ghost" size="sm" className="flex gap-1 items-center">
          <Heart className="h-4 w-4" />
          <span>{likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-1 items-center">
          <MessageCircle className="h-4 w-4" />
          <span>{comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-1 items-center">
          <Share className="h-4 w-4" />
          <span>{shares}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
