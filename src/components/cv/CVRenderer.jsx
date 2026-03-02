import React from 'react';
import { portfolioData, cvVariants } from '../../data/portfolio_data';

const CVRenderer = ({ variant = 'swe' }) => {
    const data = portfolioData;
    const config = cvVariants[variant] || cvVariants.swe;

    // Filter projects based on variant config
    const filteredProjects = data.projects.filter(p =>
        config.highlightedProjects.includes(p.id)
    );

    return (
        <div className="cv-container bg-white shadow-2xl mx-auto">
            {/* Header */}
            <header className="cv-header">
                <h1 className="cv-name uppercase tracking-tighter">{data.profile.name}</h1>
                <p className="cv-title font-sans">{config.title}</p>
                <div className="cv-contact mt-2 flex gap-x-4 gap-y-1 text-[11px] text-ink-3">
                    <span>📍 {data.profile.location}</span>
                    <span>📧 {data.profile.email}</span>
                    <span>🌐 {data.profile.website}</span>
                    <span>🐙 {data.profile.github}</span>
                    <span>🔗 {data.profile.linkedin}</span>
                </div>
            </header>

            {/* Summary */}
            <section className="cv-section mb-6">
                <p className="font-sans text-sm leading-relaxed text-ink-2">
                    {config.summary}
                </p>
            </section>

            {/* Education */}
            <section className="cv-section">
                <h2 className="cv-section-title">Education</h2>
                {data.education.map((edu, i) => (
                    <div key={i} className="mb-4">
                        <div className="flex justify-between items-baseline">
                            <h3 className="cv-item-title">{edu.institution}</h3>
                            <span className="cv-item-date">{edu.expectedGraduation || edu.period || '2023'}</span>
                        </div>
                        <p className="cv-item-sub text-xs">{edu.degree}</p>
                        {edu.coursework && (
                            <p className="text-[10px] text-ink-3 mt-1">
                                Relevant Coursework: {edu.coursework.join(', ')}
                            </p>
                        )}
                        {edu.hkdse && (
                            <p className="text-[10px] text-ink-3 mt-1">
                                HKDSE: {edu.hkdse}
                            </p>
                        )}
                    </div>
                ))}
            </section>

            {/* Experience / Projects */}
            <section className="cv-section">
                <h2 className="cv-section-title">Technical Projects</h2>
                <div className="space-y-4">
                    {filteredProjects.map((project) => (
                        <div key={project.id}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="cv-item-title">{project.title}</h3>
                                <span className="cv-item-sub text-[10px]">{project.category}</span>
                            </div>
                            <p className="cv-item-sub text-xs mb-1">{project.role}</p>
                            <ul className="cv-list text-[10px] text-ink-2 space-y-1">
                                {project.achievements.map((ach, j) => (
                                    <li key={j} className="leading-tight">{ach}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leadership */}
            <section className="cv-section mt-4">
                <h2 className="cv-section-title">Leadership & Extra-Curricular</h2>
                <div className="space-y-4">
                    {data.leadership.map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="cv-item-title">{item.role} @ {item.organization}</h3>
                                <span className="cv-item-date">{item.period}</span>
                            </div>
                            <ul className="cv-list text-[10px] text-ink-2 space-y-1">
                                {item.details.map((detail, j) => (
                                    <li key={j} className="leading-tight">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="cv-section mt-4">
                <h2 className="cv-section-title">Technical Skills</h2>
                <div className="cv-skills-grid">
                    <div className="cv-skill-group">
                        <b className="font-sans uppercase text-[9px] tracking-wider text-ink-3">Programming</b>
                        <p className="text-[10px] text-ink-2">{data.skills.programming.join(', ')}</p>
                    </div>
                    <div className="cv-skill-group">
                        <b className="font-sans uppercase text-[9px] tracking-wider text-ink-3">AI & Engineering</b>
                        <p className="text-[10px] text-ink-2">{[...data.skills.ai, ...data.skills.engineering].join(', ')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CVRenderer;
