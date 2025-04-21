
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";
import PostCard from "@/components/PostCard";
import CreatePostForm from "@/components/CreatePostForm";
import { Toaster } from "@/components/ui/toaster";

interface Post {
  id: number;
  username: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([
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
  ]);

  const handlePostCreated = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-screen-2xl mx-auto flex">
        <SidebarLeft />
        
        <main className="flex-1 py-6 px-4">
          <CreatePostForm onPostCreated={handlePostCreated} />

          <div>
            {posts.map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </main>

        <SidebarRight />
      </div>
      <Toaster />
    </div>
  );
};

export default Index;
