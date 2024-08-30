import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Ellipsis } from "lucide-react";

const ChatBubble = ({
    children,
    isReply,
}: {
    children: React.ReactNode;
    isReply?: boolean;
}) => (
    <div
        className={`w-fit md:w-auto max-w-xs p-3 rounded-lg ${
            isReply
                ? "bg-gray-100 text-black ml-auto"
                : "bg-neutral-700 text-white"
        }`}
    >
        {children}
    </div>
);

const RealtimeChat = () => {
    const [showSecondMessage, setShowSecondMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondMessage(true);
        }, 2000); // Delay of 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <Card className="w-full max-w-md mx-auto bg-background text-foreground shadow-md p-7">
            <CardContent className="space-y-4">
                <ChatBubble>Hey, how&apos;s it going?</ChatBubble>
                {showSecondMessage ? (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <ChatBubble isReply>
                            All good! How about you?
                        </ChatBubble>
                    </motion.div>
                ) : (
                    <div className="flex justify-end">
                        <div className="text-foreground/80">
                          <Ellipsis className="size-6 animate-pulse" />
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default RealtimeChat;