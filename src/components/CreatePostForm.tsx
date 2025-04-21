
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Image, Smile, MapPin, Video, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CreatePostFormProps {
  onPostCreated: (post: {
    id: number;
    username: string;
    avatar: string;
    time: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
  }) => void;
}

const CreatePostForm = ({ onPostCreated }: CreatePostFormProps) => {
  const [postContent, setPostContent] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handlePostSubmit = () => {
    if (!postContent.trim()) {
      toast({
        title: "Ошибка публикации",
        description: "Напишите что-нибудь, чтобы опубликовать пост",
        variant: "destructive",
      });
      return;
    }

    // Создаем новый пост
    const newPost = {
      id: Date.now(),
      username: "Вы",
      avatar: "/placeholder.svg",
      time: "Только что",
      content: postContent,
      image: imageUrl || undefined,
      likes: 0,
      comments: 0,
      shares: 0,
    };

    // Передаем новый пост родительскому компоненту
    onPostCreated(newPost);

    // Очищаем форму
    setPostContent("");
    setImageUrl(null);

    toast({
      title: "Пост опубликован",
      description: "Ваш пост успешно опубликован в ленте",
    });
  };

  const handleImageUpload = () => {
    setIsUploading(true);
    
    // Имитация загрузки изображения
    setTimeout(() => {
      setImageUrl("/placeholder.svg");
      setIsUploading(false);
      
      toast({
        title: "Изображение загружено",
        description: "Ваше изображение успешно добавлено к посту",
      });
    }, 1500);
  };

  const removeImage = () => {
    setImageUrl(null);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="@username" />
            <AvatarFallback>ВЫ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea 
              placeholder="Что у вас нового?" 
              className="mb-3 resize-none"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            
            {imageUrl && (
              <div className="relative mb-3 rounded-md overflow-hidden">
                <img src={imageUrl} alt="Загруженное изображение" className="w-full max-h-60 object-cover" />
                <Button 
                  variant="destructive" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-80"
                  onClick={removeImage}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleImageUpload}
                  disabled={isUploading || !!imageUrl}
                >
                  <Image className="h-4 w-4 mr-1" />
                  Фото
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4 mr-1" />
                  Видео
                </Button>
                <Button variant="ghost" size="sm">
                  <Smile className="h-4 w-4 mr-1" />
                  Эмоции
                </Button>
                <Button variant="ghost" size="sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  Место
                </Button>
              </div>
              <Button 
                size="sm" 
                onClick={handlePostSubmit}
                disabled={!postContent.trim() && !imageUrl}
              >
                Опубликовать
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostForm;
