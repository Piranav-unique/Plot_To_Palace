app.service('dataService', function() {
    this.getHomeData = function() {
        return {
            title: 'Welcome to PlottoPalace - Your 2D House Design Partner!',
            description: 'Design your dream home with ease. Input your requirements and visualize your space.'
        };
    };

    this.getAboutData = function() {
        return {
            title: 'About PlottoPalace',
            mission: 'Our mission is to simplify the complex process of house planning by providing a user-friendly platform that transforms ideas into detailed, functional 2D layouts. We believe that designing your home should be an enjoyable and accessible experience for everyone.',
            offerings: [
                'Intuitive Design Tools: Create floor plans, arrange rooms, and add essential elements with our easy-to-use interface.',
                'Smart Layout Generation: Input your requirements and let our intelligent system suggest optimal layouts tailored to your needs.',
                'Customization and Flexibility: Personalize every aspect of your design, from room dimensions to furniture placement, ensuring your vision is perfectly realized.',
                'Collaborative Features: Share your designs with others and gather feedback to refine your plans.'
            ],
            whyChoose: 'At PlottoPalace, we are committed to providing a seamless and powerful design experience. Whether you\'re planning a new home, renovating an existing space, or simply exploring design possibilities, our platform offers the tools and support you need to succeed. Join our community and start designing your perfect palace today!'
        };
    };
});