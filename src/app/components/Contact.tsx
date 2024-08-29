import H2 from '@/components/H2';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact">
        <H2>Contact</H2>
        <p className="text-foreground my-4">
            Interested in working together? Feel free to reach out!
        </p>
        <Button>
            <a href="mailto:renzyx.dev@gmail.com">Get in Touch</a>
        </Button>
    </section>
  );
}

export default Contact