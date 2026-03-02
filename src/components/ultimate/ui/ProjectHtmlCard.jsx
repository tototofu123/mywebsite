import { useRef, useEffect } from 'react'
import { portfolioData } from '../../../data/portfolio_data'

const { projects } = portfolioData

const CATEGORY_COLORS = {
    'Robotics & Embedded Systems': '#e06c55',
    'AI-Augmented Development': '#c9a882',
    'Deep Learning & Game Intelligence': '#a07060',
    'AI Agents & Automation': '#d4956c',
}

// Full HTML card rendered inside R3F Html overlay
const ProjectHtmlCard = ({ project }) => (
    <div style={{
        width: '220px',
        background: 'rgba(10, 8, 4, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '16px',
        borderRadius: '2px',
        color: 'white',
        fontFamily: 'sans-serif',
        cursor: 'default',
    }}>
        <div style={{
            fontSize: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: CATEGORY_COLORS[project.category] || '#e06c55',
            marginBottom: '8px'
        }}>
            {project.category}
        </div>
        <div style={{
            fontSize: '13px',
            fontWeight: '500',
            color: '#f5f0e8',
            lineHeight: '1.3',
            marginBottom: '6px',
            fontFamily: 'Georgia, serif'
        }}>
            {project.title}
        </div>
        <div style={{
            fontSize: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '10px'
        }}>
            {project.role}
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {project.achievements.slice(0, 3).map((a, i) => (
                <li key={i} style={{
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: '1.5',
                    marginBottom: '4px',
                    paddingLeft: '8px',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                }}>
                    {a}
                </li>
            ))}
        </ul>
    </div>
)

export { ProjectHtmlCard, projects }
