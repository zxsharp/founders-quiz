export const founderProfiles = {
            EM: { 
                name: "Elon Musk", 
                description: "You're a first-principles thinker, unafraid to tackle audacious, species-altering goals. Your vision extends beyond current paradigms, driving you to revolutionize industries like transportation, energy, and space exploration. You thrive on high-stakes challenges and inspire intense dedication to achieve the seemingly impossible." 
            },
            MZ: { 
                name: "Mark Zuckerberg", 
                description: "Your core drive is to connect the world and build massive, scalable platforms that redefine social interaction. You operate with a pragmatic, data-centric approach, believing in rapid iteration, relentless execution, and the power of network effects to achieve global impact and widespread adoption." 
            },
            BG: { 
                name: "Bill Gates", 
                description: "You possess a formidable intellect for strategic, long-term platform building and complex problem-solving. Your analytical rigor defined an era of personal computing, and your later focus demonstrates a profound commitment to leveraging technology and wealth for global betterment and systemic change through philanthropy." 
            },
            SJ: { 
                name: "Steve Jobs", 
                description: "You are a visionary artist in the realm of technology, obsessed with product perfection and an intuitive, delightful user experience. You believe in the profound impact of beautifully designed, seamlessly integrated technology that doesn't just serve a function but evokes emotion and changes how people interact with their world." 
            },
            JB: { 
                name: "Jeff Bezos", 
                description: "Customer obsession is your mantra. You are relentlessly focused on long-term vision, operational excellence, and building enduring systems that deliver unparalleled value and convenience. You champion bold experimentation, embrace failure as a learning tool, and aim for market leadership through scale and efficiency." 
            },
            SA: { 
                name: "Sam Altman", 
                description: "You stand at the vanguard of potentially world-transforming technologies like Artificial General Intelligence. Your thinking is characterized by a deep consideration of the future, focusing on fostering innovation, navigating complex ethical landscapes, and guiding humanity towards a beneficial and advanced technological era." 
            },
            GF: { 
                name: "Google Founders (Larry Page & Sergey Brin)", 
                description: "Your ambition is to organize the world's information and make it universally accessible and profoundly useful. You champion 'moonshot' thinking, believing in the power of engineering brilliance and audacious goals to solve humanity's biggest challenges and unlock new frontiers of knowledge and capability." 
            }
        };

export const quizData = [
    {
        question: "What motivates you most when starting a new project?",
        name: "q1",
        options: [
            { text: "Solving a massive global challenge that could reshape the future.", founders: ["EM", "SA"] },
            { text: "Creating a product so beautiful and intuitive that users fall in love with it.", founders: ["SJ"] },
            { text: "Building a platform that connects millions and changes how they interact.", founders: ["MZ"] },
            { text: "Finding a highly efficient, scalable solution to a widespread customer pain point.", founders: ["JB", "BG"] }
        ]
    },
    {
        question: "When faced with a major setback, your first instinct is to:",
        name: "q2",
        options: [
            { text: "Double down, work intensely, and push through with sheer force of will.", founders: ["EM"] },
            { text: "Analyze data, understand what went wrong, and iterate quickly on a revised plan.", founders: ["MZ", "JB"] },
            { text: "Re-evaluate if the core vision is sound and if the user experience is compromised.", founders: ["SJ"] },
            { text: "Consult experts, explore alternatives, and ensure long-term viability.", founders: ["BG", "SA", "GF"] }
        ]
    },
    {
        question: "Your ideal company culture is built around:",
        name: "q3",
        options: [
            { text: "A relentless pursuit of ambitious, world-changing goals, even if it means breaking things.", founders: ["EM"] },
            { text: "A deep understanding of user needs and an obsession with crafting the perfect experience.", founders: ["SJ", "JB"] },
            { text: "Rapid experimentation, data analysis, and scaling proven successes.", founders: ["MZ"] },
            { text: "Intellectual curiosity, empowering smart people, and tackling complex technical problems.", founders: ["BG", "GF", "SA"] }
        ]
    },
    {
        question: "When it comes to innovation, you believe in:",
        name: "q4",
        options: [
            { text: "Radical, game-changing breakthroughs, even if they are high-risk and unconventional.", founders: ["EM", "GF"] },
            { text: "Incremental improvements and relentless optimization based on user feedback and data.", founders: ["MZ", "JB"] },
            { text: "Elegance and simplicity in design, making complex technology feel effortless.", founders: ["SJ"] },
            { text: "Investing in foundational research and development for long-term societal benefit.", founders: ["BG", "SA"] }
        ]
    },
    {
        question: "What's your approach to competition?",
        name: "q5",
        options: [
            { text: "Dominate the market by moving faster and being more aggressive than anyone else.", founders: ["EM", "JB"] },
            { text: "Focus on building a unique product and community that competitors can't replicate.", founders: ["SJ", "MZ"] },
            { text: "Outsmart them with superior strategy, technology, and a long-term game plan.", founders: ["BG"] },
            { text: "Collaborate where possible, but ensure your core mission remains distinct and impactful.", founders: ["SA", "GF"] }
        ]
    },
    {
        question: "How do you view failure?",
        name: "q6",
        options: [
            { text: "An inevitable part of pushing boundaries; if you're not failing, you're not trying hard enough.", founders: ["EM", "JB"] },
            { text: "A valuable learning opportunity to gather data and improve the next iteration.", founders: ["MZ"] },
            { text: "Unacceptable if it compromises the quality or vision of the product.", founders: ["SJ"] },
            { text: "A signal to reassess, pivot, or even abandon an approach if it's not strategically sound.", founders: ["BG", "SA"] }
        ]
    },
    {
        question: "Your primary focus for the next decade would be:",
        name: "q7",
        options: [
            { text: "Revolutionizing a major industry (e.g., transport, energy, space).", founders: ["EM"] },
            { text: "Connecting the entire world and building the next generation of social/digital interaction.", founders: ["MZ"] },
            { text: "Solving major global problems through technology and philanthropy.", founders: ["BG"] },
            { text: "Creating artificial general intelligence responsibly and ensuring its benefits are widespread.", founders: ["SA"] },
            { text: "Making information universally accessible and useful.", founders: ["GF"] },
            { text: "Building the ultimate customer-centric company.", founders: ["JB"] },
            { text: "Crafting the next iconic technology product that changes lives.", founders: ["SJ"] }
        ]
    },
    {
        question: "When making a critical decision, you rely most on:",
        name: "q8",
        options: [
            { text: "Your gut instinct and unwavering conviction in your vision.", founders: ["SJ", "EM"] },
            { text: "Extensive data analysis and A/B testing.", founders: ["MZ", "JB"] },
            { text: "Expert opinions and a thorough assessment of risks and rewards.", founders: ["BG", "SA"] },
            { text: "First principles thinking and logical deduction.", founders: ["EM", "GF"] }
        ]
    },
    {
        question: "What is your leadership style?",
        name: "q9",
        options: [
            { text: "Visionary and demanding, pushing teams to achieve the impossible.", founders: ["EM", "SJ"] },
            { text: "Data-driven and results-oriented, empowering teams with clear metrics.", founders: ["MZ", "JB"] },
            { text: "Strategic and analytical, fostering a culture of intellectual rigor.", founders: ["BG"] },
            { text: "Collaborative and mission-driven, focused on ethical development and long-term impact.", founders: ["SA", "GF"] }
        ]
    },
    {
        question: "The ultimate purpose of technology is to:",
        name: "q10",
        options: [
            { text: "Push the boundaries of human potential and secure our long-term survival.", founders: ["EM", "SA"] },
            { text: "Connect people and build communities on a global scale.", founders: ["MZ"] },
            { text: "Empower individuals and improve lives through innovative tools and platforms.", founders: ["BG", "SJ"] },
            { text: "Make information accessible and organize it for the benefit of all.", founders: ["GF"] },
            { text: "Serve customers with unparalleled convenience and value.", founders: ["JB"] }
        ]
    }
];