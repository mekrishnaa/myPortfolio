import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Comviva',
      period: 'Jan 2023 - Present',
      location: 'Gurgaon, Haryana',
      description: [
        'Developed solutions for seamless payment gateway integration to enhance business applications.',
        'Contributed to the development of a Low Code/No Code platform, enabling users to create Apis via an intuitive UI.',
        'Designed and implemented a workflow UI, reducing manual configuration efforts by 15%.',
        'Worked on the DBXP mobile banking application, introducing features like draft functionality and deposit creation modules, leading to a 5% improvement in user task completion rates.',
        'Mentored junior developers and conducted code reviews to ensure code quality and best practices'
      ],
      technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'SCSS', 'Jest', 'Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'Git', 'CI/CD']
    },
    {
      title: 'Software Engineer II',
      company: 'Forrester Research',
      period: 'Sep 2022 - Jan 2023',
      location: 'New Delhi, Delhi',
      description: [
        'Designed and implemented a filter feature with recurring options for advanced search functionalities.',
        'Rebuilt Forrester’s internal solution engine application with React.js, improving maintainability by 10%.',
        'Enhanced content recommendations and alerts using personalization algorithms for user engagement.',
        'Participated in agile development processes, including daily stand-ups and sprint planning'
      ],
      technologies: ['React', 'Redux', 'JavaScript', 'CSS3', 'HTML5', 'REST APIs','Vue.js','Vuex', 'Java','Spring Boot']
    },
    {
      title: 'Product Development Engineer',
      company: 'Comviva',
      period: 'Jun 2021 - Aug 2022',
      location: 'Gurgaon, Haryana',
      description: [
        'Created a bulk customer registration module for Mobiquity Pay, increasing operational efficiency by 5%.',
        'Owned the module which helps the user to track their activity on the application, increase the performance by 5%.',
        'Enhanced features of some previously developed Modules in the application',
        'Collaborated with backend developers to integrate APIs'
      ],
      technologies: ['Angular', 'RxJs', 'Ngxs', 'Java', 'Spring MVC']
    }
  ];
  
  education: Education[] = [
    {
      degree: 'Master of Computer Applications',
      institution: 'National Institute of Technology, Tiruchirappalli',
      period: '2018 - 2021',
      location: 'Tiruchirappalli, Tamil Nadu',
      description: 'Completed my Master of Computer Applications with a focus on advanced software development and system architecture.'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'M.L.T College, Saharsa',
      period: '2014 - 2018',
      location: 'Saharsa, Bihar',
      description: 'Graduated with honors. Specialized in Computer Applications. Participated in various hackathons and coding competitions.'
    },
    
  ];
} 