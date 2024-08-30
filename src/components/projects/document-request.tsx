import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocumentRequestApp = () => {
    const [requestedDocuments, setRequestedDocuments] = useState<string[]>([]);

    const documents = [
        "COR",
        "Form 137",
        "Good Moral",
        "Transcript of Records",
    ];

    const handleRequest = (document: string) => {
        setRequestedDocuments((prev) => [...prev, document]);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <motion.div
                className="w-[300px] h-[700px] bg-black border-2 border-black rounded-3xl relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute top-0 w-full h-10 bg-gray-800 flex justify-center items-center rounded-t-2xl">
                    <div className="w-24 h-1 bg-gray-500 rounded-full"></div>
                </div>

                <Card className="m-4 p-0 bg-foreground text-background rounded-xl shadow-lg">
                    <CardHeader className="text-center py-4">
                        <h2 className="text-lg font-bold">Request Documents</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="flex flex-col gap-2">
                            {documents.map((doc) => (
                                <li
                                    key={doc}
                                    className="flex justify-between items-center"
                                >
                                    <span>{doc}</span>
                                    <Button
                                        onClick={() => handleRequest(doc)}
                                        variant={'default'}
                                    >
                                        Request
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        {requestedDocuments.length > 0 && (
                            <motion.div
                                className="mt-4 p-2 bg-gray-800 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="font-semibold">
                                    Requested Documents:
                                </h3>
                                <ul className="list-disc list-inside">
                                    {requestedDocuments.map((doc, index) => (
                                        <li key={index}>{doc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default DocumentRequestApp;
