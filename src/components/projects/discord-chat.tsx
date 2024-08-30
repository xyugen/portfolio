import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ChatMessage {
    user: string;
    message: string;
    timestamp: string;
}

const ChatBubble = ({
    message,
    user,
    isBot,
}: {
    message: string;
    user: string;
    isBot?: boolean;
}) => (
    <div className={`flex justify-start w-full space-x-3 mb-4 hover:opacity-80`}>
        <div>
            <div className={isBot ? "text-red-500" : "text-yellow-500"}>{user}</div>
            <div className={`rounded-lg`}>{message}</div>
        </div>
    </div>
);

const DiscordChat = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [showBotReply, setShowBotReply] = useState(false);

    useEffect(() => {
        const initialMessages: ChatMessage[] = [
            { user: "Renzyx", message: "Hello, Revel!", timestamp: "10:00 AM" },
        ];
        setMessages(initialMessages);

        const timer = setTimeout(() => {
            setShowBotReply(true);
        }, 2000); // Delay of 2 seconds for bot reply

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showBotReply) {
            const botMessage: ChatMessage = {
                user: "Revel",
                message: "Hello! How can I assist you today?",
                timestamp: "10:01 AM",
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
    }, [showBotReply]);

    return (
        <Card className="mx-auto bg-background text-foreground shadow-md p-4">
            <CardContent className="space-y-2">
                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                        <ChatBubble
                            message={msg.message}
                            user={msg.user}
                            isBot={msg.user === "Revel"}
                        />
                    </motion.div>
                ))}
            </CardContent>
        </Card>
    );
};

export default DiscordChat;
