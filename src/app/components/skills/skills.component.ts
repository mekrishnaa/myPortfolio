import { Component } from '@angular/core';

interface Skill {
  name: string;
  percentage: number;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', percentage: 95, color: '#dd0031' },
        { name: 'TypeScript', percentage: 90, color: '#007acc' },
        { name: 'React', percentage: 85, color: '#61dafb' },
        { name: 'Vue.js', percentage: 75, color: '#42b883' },
        { name: 'HTML5 & CSS3', percentage: 95, color: '#e34c26' },
        { name: 'SCSS/SASS', percentage: 90, color: '#cc6699' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', percentage: 80, color: '#f89820' },
        { name: 'Spring Boot', percentage: 75, color: '#6db33f' },
        { name: 'Node.js', percentage: 70, color: '#68a063' },
        { name: 'Express.js', percentage: 65, color: '#61dafb' },
        { name: 'RESTful APIs', percentage: 85 },
        { name: 'GraphQL', percentage: 60, color: '#e535ab' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', percentage: 90 },
        { name: 'Docker', percentage: 65, color: '#2496ed' },
        { name: 'Jenkins', percentage: 75, color: '#8dd6f9' },
        { name: 'Jest', percentage: 80, color: '#c21325' },
        { name: 'Agile/Scrum', percentage: 85 },
        { name: 'UI/UX Design', percentage: 70 }
      ]
    }
  ];
} 