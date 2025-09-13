import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send to your backend/newsletter service
    setIsSubscribed(true);
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-4 text-foreground">
              Stay Updated with Our Latest Designs
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest design tips, industry insights, 
              and exclusive offers delivered straight to your inbox. Join our community of 
              creative enthusiasts!
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="sm:px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;