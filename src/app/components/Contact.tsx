import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact">
        <h2 className="text-primary text-3xl font-bold mb-4">Contact</h2>
        <p className="text-foreground mb-4">
            Interested in working together? Feel free to reach out!
        </p>
        <Button>
            <a href="mailto:renzyx.dev@gmail.com">Get in Touch</a>
        </Button>
    </section>
  );
}

export default Contact