
import Navbar from "@/components/Navbar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Image, Smile, MapPin, Video } from "lucide-react";

const Index = () => {
  const posts = [
    {
      id: 1,
      username: "Анна Петрова",
      avatar: "/placeholder.svg",
      time: "2 часа назад",
      content: "Сегодня прекрасный день! Пошла гулять в парк и наслаждаюсь солнечной погодой. Как ваши дела, друзья?",
      image: "/placeholder.svg",
      likes: 24,
      comments: 5,
      shares: 2
    },
    {
      id: 2,
      username: "Максим Соколов",
      avatar: "/placeholder.svg",
      time: "5 часов назад",
      content: "Только что закончил новый проект! Было сложно, но результат того стоил. Делюсь с вами своими достижениями.",
      likes: 42,
      comments: 12,
      shares: 7
    },
    {
      id: 3,
      username: "Елена Смирнова",
      avatar: "/placeholder.svg",
      time: "Вчера",
      content: "Приготовила вкуснейший торт по рецепту бабушки. Делюсь фото, выглядит аппетитно!",
      image: "/placeholder.svg",
      likes: 56,
      comments: 8,
      shares: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-screen-2xl mx-auto flex">
        <SidebarLeft />
        
        <main className="flex-1 py-6 px-4">
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="@username" />
                  <AvatarFallback>ЮП</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea 
                    placeholder="Что у вас нового?" 
                    className="mb-3 resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
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
                    <Button size="sm">Опубликовать</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            {posts.map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </main>

        <SidebarRight />
      </div>
    </div>
  );
};

export default Index;
