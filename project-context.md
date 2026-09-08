# PROJECT_CONTEXT.md
# SIH — Student Skill Verification, Skill Intelligence & Opportunity Matching Platform

**Document status:** Definitive project context / working source of truth  
**Purpose:** Preserve the project's complete conceptual context for AI agents, product work, design, development, demonstrations, and future continuation.  
**Intended audience:** Project owner, developers, designers, AI coding agents, product/research contributors, and future maintainers.  
**Companion documents:** `PRD.md` and `GEMINI.md`

---

## 0. HOW TO USE THIS DOCUMENT

This document exists because the project should not depend on the memory of a previous chat.

An AI agent receiving this file should be able to understand the project without having access to the original conversations that produced these decisions.

This file explains:

- the SIH problem being solved,
- the project's interpretation of that problem,
- the product vision,
- the ecosystem and users,
- what the platform actually does,
- how skills are represented,
- how skills are verified,
- how assessments and evidence work,
- how companies provide opportunities,
- how matching works,
- where AI belongs,
- where deterministic logic belongs,
- how colleges participate,
- what the MVP includes,
- what deliberately stays outside the MVP,
- the intended technical direction,
- the trust/privacy philosophy,
- the demo strategy,
- important edge cases,
- and decisions that should not be silently changed.

This is **not** intended to replace the detailed PRD.

### Relationship between project documents

```text
PROJECT_CONTEXT.md
        |
        | Why the product exists
        | What the product means
        | Locked product context
        v
PRD.md
        |
        | What must be built
        | Detailed requirements
        | Workflows
        | Acceptance criteria
        | Product rules
        v
GEMINI.md
        |
        | How the AI coding agent should work
        | Coding/project rules
        | Engineering behavior
        v
SOURCE CODE
```

`PROJECT_CONTEXT.md` is context.

`PRD.md` is the detailed product requirements document.

`GEMINI.md` is an agent instruction/rules file.

Do not collapse all three concepts into one document.

---

# 1. PROJECT OVERVIEW

## 1.1 What are we building?

We are building a web platform for an SIH problem centered around the disconnect between:

1. what students actually know,
2. what companies require,
3. what colleges know about their students' skills.

The platform creates a common ecosystem in which:

- students build professional, evidence-backed skill profiles,
- skills can be assessed and verified,
- projects/GitHub can provide supporting evidence,
- verified companies publish structured internship/job opportunities,
- the system compares student capabilities with opportunity requirements,
- the matching engine identifies eligibility, matched skills, missing skills, proficiency gaps, and an explainable match score,
- students receive actionable skill-gap and learning recommendations,
- companies can discover relevant students,
- colleges can see aggregated skill-gap and readiness insights.

The product is therefore more than a job portal.

It is more than a student profile system.

It is more than an assessment platform.

It is more than an AI recommendation system.

It is a **skill intelligence and trust layer connecting students, institutions, and industry opportunities.**

---

# 2. SIH PROBLEM INTERPRETATION

## 2.1 Core disconnect

The underlying problem can be understood as a three-sided disconnect:

```text
                INDUSTRY
        What skills are required?
                   |
                   |
                   v
STUDENTS -------------------- COLLEGES
What skills do I have?       What skills do our
What am I missing?           students collectively need?
```

Each side has incomplete information.

### Student problem

A student may know the technologies they have studied, but may not know:

- whether their current skills are sufficient for a desired role,
- which skills companies currently require,
- which skills are actually verified,
- which skills they are missing,
- which skill should be learned next,
- which opportunities genuinely fit their current capability.

### Company problem

A company may know what a role requires, but may struggle to:

- identify students with relevant capabilities,
- separate actual evidence from self-declared skills,
- understand candidate fit quickly,
- screen large numbers of profiles,
- identify students who are close to being suitable but have specific gaps.

### College problem

A college may have many students, but may not have a structured, consolidated view of:

- student skills,
- verified skills,
- unverified claims,
- common skill gaps,
- career interests,
- department-level readiness,
- year/batch-level skill trends,
- alignment between student capabilities and industry demand.

---

# 3. INFORMATION FRAGMENTATION

Without a unified system, useful information may exist in:

- resumes,
- GitHub profiles,
- portfolios,
- job portals,
- spreadsheets,
- individual student records,
- college systems,
- placement processes,
- WhatsApp groups,
- company descriptions,
- assessment results.

The proposed platform attempts to convert important parts of this fragmented information into structured, connected data.

The central idea is:

```text
Student Capability
       +
Evidence
       +
Verification
       +
Industry Requirements
       ↓
Structured Matching
       ↓
Actionable Skill Intelligence
```

---

# 4. PRODUCT VISION

## 4.1 Vision

Create a trusted and explainable platform where opportunities are matched to students based on a stronger representation of their capabilities than self-declaration alone.

The platform should help answer:

### For students

> What can I credibly demonstrate?

> Which opportunities fit me?

> Why do I match?

> What am I missing?

> What should I improve next?

### For companies

> Which students have verified skills relevant to this opportunity?

> Why does this candidate match?

> What evidence supports the candidate's profile?

### For colleges

> What skills do our students have?

> Which are verified?

> Where are the biggest skill gaps?

> Which skills are becoming important for our students' target careers/opportunities?

---

# 5. THE CORE PRODUCT LOOP

The most important loop in the entire project is:

```text
DECLARE
   ↓
ASSESS / PROVIDE EVIDENCE
   ↓
VERIFY
   ↓
BUILD TRUSTED SKILL PROFILE
   ↓
COMPARE WITH OPPORTUNITY
   ↓
MATCH
   ↓
EXPLAIN
   ↓
IDENTIFY SKILL GAP
   ↓
RECOMMEND WHAT TO IMPROVE
   ↓
BECOME MORE OPPORTUNITY-READY
   ↓
APPLY / CONNECT
```

For colleges, the same structured information becomes:

```text
STUDENT SKILL DATA
       ↓
AGGREGATION
       ↓
COLLEGE SKILL INTELLIGENCE
       ↓
COMMON GAPS / TRENDS
       ↓
INSTITUTIONAL ACTION
```

This loop should guide feature decisions.

---

# 6. PRODUCT POSITIONING

The product should NOT be described merely as:

- a job portal,
- a resume builder,
- a social network,
- a coding assessment website,
- an AI career chatbot,
- a college ERP,
- an ATS.

A stronger description is:

> **An evidence-backed student skill intelligence and opportunity matching platform connecting students, verified companies, and colleges.**

Its differentiating concept is:

> **Match opportunities to verified/evidence-backed skills, explain the match, identify the gap, and help the student improve.**

---

# 7. TRUST MODEL

Trust is one of the most important product concepts.

The platform must distinguish among at least three conceptual states:

### 7.1 Self-declared

The student says:

> "I know Node.js."

This is a claim.

It should not automatically be treated as verified capability.

### 7.2 Evidence-supported

There is supporting evidence such as:

- a project,
- GitHub repository,
- portfolio,
- assessment performance,
- other legitimate evidence.

Evidence increases confidence but does not necessarily prove proficiency.

### 7.3 Verified

The platform's defined verification process provides enough evidence according to explicit rules.

This can involve:

- assessments,
- practical/coding performance,
- supporting project evidence,
- other approved signals.

The product should never casually collapse these states into:

```text
hasSkill = true
```

without preserving how that conclusion was reached.

---

# 8. LOCKED PRINCIPLE: SKILL DECLARATION ≠ SKILL VERIFICATION

This is a foundational product rule.

A student can declare:

```text
Node.js — Intermediate
```

but that does not mean:

```text
Node.js — Verified Intermediate
```

The profile should clearly distinguish the two.

This is important because the product's value depends on improving trust in skill representation.

---

# 9. USERS AND ROLES

There are four principal role categories.

```text
1. Student
2. Company
3. College / Institution
4. Admin
```

Each role has a different purpose.

---

# 10. STUDENT ROLE

## 10.1 Student objective

The student uses the platform to:

- represent their skills,
- verify those skills,
- build evidence,
- understand industry requirements,
- find relevant opportunities,
- understand gaps,
- improve capabilities.

## 10.2 Student capabilities

The MVP student experience should support:

- registration/login,
- professional profile,
- college/institution association,
- department/course/year/batch context where applicable,
- career goals/interests,
- skill declaration,
- proficiency declaration,
- assessments,
- assessment scoring,
- verification status,
- projects,
- GitHub/portfolio links,
- certifications/achievements where appropriate,
- opportunity discovery,
- match score,
- match explanation,
- matched skills,
- missing skills,
- insufficient skills,
- skill-gap information,
- learning recommendations,
- application/interest.

---

# 11. STUDENT PROFESSIONAL PROFILE

The student profile should feel like a professional capability profile.

Possible fields include:

- name,
- profile photo,
- college/institution,
- education,
- department,
- course,
- year,
- batch,
- career goals,
- career interests,
- skills,
- verified proficiency,
- projects,
- GitHub,
- portfolio,
- certifications,
- achievements.

The exact fields should be finalized in the PRD.

---

# 12. STUDENT CAREER GOALS

Students should be able to indicate career directions.

Illustrative examples:

- Backend Developer
- Frontend Developer
- Full Stack Developer
- Data Analyst
- Machine Learning Engineer

These examples are not a final fixed taxonomy.

Career goals can influence:

- opportunity recommendations,
- skill-gap prioritization,
- learning recommendations.

Career goals should NOT override hard opportunity eligibility requirements.

---

# 13. SKILL PROFICIENCY

The product should support at least:

- Beginner
- Intermediate
- Advanced

A student can self-declare proficiency.

However:

> Self-declared proficiency is not automatically verified proficiency.

Assessment/evidence-based verification should provide the stronger signal.

---

# 14. SKILL VERIFICATION

## 14.1 Purpose

Verification exists to reduce unsupported skill claims.

It should answer:

> "Is there sufficient evidence, according to our platform rules, to represent this skill as verified?"

It should NOT claim:

> "We have mathematically proven the person has perfect mastery."

---

# 15. ASSESSMENT SYSTEM

Assessments are a core verification mechanism.

## 15.1 Assessment types

Depending on the skill, assessments can include:

- conceptual questions,
- multiple-choice questions,
- practical questions,
- coding/programming questions,
- other skill-appropriate tasks.

For technical skills, practical/coding evaluation is particularly valuable.

---

# 16. QUESTION BANK

The platform can maintain question banks.

Where appropriate, assessments can use:

- randomized questions,
- different question selections,
- controlled attempts,
- time limits.

Randomization can reduce the chance that every user sees exactly the same assessment.

The exact assessment architecture should be defined in the PRD.

---

# 17. ASSESSMENT SCORING

Assessment performance must be scored using deterministic rules.

The system should record information such as:

- score,
- attempt,
- time,
- questions/results,
- relevant integrity signals.

The assessment engine should be reproducible.

AI should NOT decide the official assessment score.

---

# 18. ASSESSMENT INTEGRITY

Reasonable integrity signals may include:

- time taken,
- number of attempts,
- answer patterns,
- tab/window switching where technically detectable,
- other technically observable signals.

These are signals.

They are NOT proof of cheating.

The product must not claim:

- perfect cheating detection,
- guaranteed cheat prevention,
- perfect proctoring.

Advanced proctoring is future scope.

---

# 19. ASSESSMENT + PROJECT EVIDENCE

The conceptual verification pipeline is:

```text
Student Declaration
       ↓
Unverified Claim
       |
       +---- Assessment ----+
       |                    |
       +---- Project/GitHub-+
                            ↓
                    Evidence Signals
                            ↓
                    Verification Rules
                            ↓
                  Verified Skill/Proficiency
```

The exact combination/threshold policy must be defined explicitly rather than invented by an implementation agent.

---

# 20. GITHUB / PROJECT EVIDENCE

Students can provide:

- GitHub repositories,
- project links,
- portfolio links,
- project descriptions.

The system may inspect the information for supporting evidence.

Potential signals include:

- technologies used,
- frameworks,
- libraries,
- project context,
- relevant implementation evidence.

---

# 21. GITHUB IS NOT AUTOMATIC PROOF

This is important.

A GitHub repository does NOT automatically prove:

- proficiency,
- authorship,
- mastery,
- current capability.

Therefore:

```text
GitHub Evidence
      ≠
Automatic Verification
```

It is supporting evidence.

---

# 22. AI FOR PROJECT / GITHUB ANALYSIS

AI may assist in:

- identifying technologies,
- identifying potentially relevant skills,
- understanding project descriptions,
- summarizing evidence,
- extracting supporting signals.

But:

```text
AI sees React in repository
          ↓
Supporting evidence
          ↓
NOT automatically:
React = Verified
```

Verification still follows platform rules.

---

# 23. VERIFICATION CONFIDENCE

Verification should be understood as a confidence/evidence representation.

The system may maintain:

- verification status,
- proficiency,
- assessment evidence,
- project evidence,
- evidence metadata,
- confidence/supporting signals.

The UI should communicate confidence carefully and avoid presenting uncertain AI inference as absolute truth.

---

# 24. OPPORTUNITY SYSTEM

Opportunities include:

- internships,
- jobs,
- other relevant industry opportunities as defined by the PRD.

The MVP primarily relies on opportunities created directly by companies on the platform.

---

# 25. COMPANY ROLE

Companies use the platform to:

- establish a verified company identity,
- publish structured opportunities,
- specify required skills,
- specify preferred skills,
- specify proficiency expectations,
- specify eligibility,
- discover relevant students.

---

# 26. COMPANY VERIFICATION

Company verification is a hard trust rule.

The workflow is:

```text
Company Registration
        ↓
Verification Pending
        ↓
Admin Review
        |
        +---- Rejected
        |
        +---- Verified
                 ↓
       Opportunity Publishing Allowed
```

Only verified companies can publish opportunities.

---

# 27. UNVERIFIED COMPANIES

Pending/unverified companies:

- may exist in the system,
- may be undergoing verification,
- must NOT publish opportunities.

This restriction is intentional.

---

# 28. ADMIN CANNOT BYPASS COMPANY VERIFICATION

This is a locked rule.

Admin can perform governance actions, including company verification/rejection.

However, admin must not create a hidden bypass such as:

```text
Admin creates opportunity
for unverified company
       ↓
Opportunity becomes published
```

The business rule remains:

```text
Company → Verification → Verified → Publish
```

---

# 29. SIH DEMO DATA

For the SIH demonstration, the database may be seeded with:

- a pre-verified demo company,
- demo opportunities,
- appropriate demo students/college data.

This is acceptable.

However, demo data is not a production authorization shortcut.

A marker such as:

```text
isDemo
```

or equivalent metadata may identify seeded records.

But:

> `isDemo` must not mean "bypass verification."

The normal production rule must remain intact.

---

# 30. OPPORTUNITY STRUCTURE

A company opportunity should contain structured information including:

- title,
- description,
- required skills,
- preferred skills,
- required proficiency,
- eligibility,
- location,
- work mode,
- application deadline.

Additional useful fields may be added in the PRD if they directly support the core product.

---

# 31. REQUIRED VS PREFERRED SKILLS

This distinction is essential.

### Required

Skills necessary for the opportunity.

They carry stronger matching weight.

### Preferred

Skills that improve fit but are not necessarily mandatory.

They carry lower matching weight.

The matching engine must preserve this distinction.

---

# 32. OPPORTUNITY SKILL REQUIREMENTS

A skill requirement should conceptually contain:

```text
Skill
Requirement Type
Required/Preferred
Minimum Proficiency
```

Potentially also:

- priority,
- evidence expectations,
- normalization/canonical skill ID.

Exact schema belongs in PRD/technical design.

---

# 33. EXTERNAL JOB SOURCES

External job aggregation is intentionally NOT part of the MVP.

Examples include:

- LinkedIn,
- external job portals,
- third-party opportunity feeds.

The MVP should not depend on scraping these platforms.

---

# 34. FUTURE EXTERNAL INTEGRATION

Future versions may support:

- authorized APIs,
- permitted feeds,
- official integrations,
- legally permissible opportunity aggregation.

Any future external integration must respect technical and legal constraints.

---

# 35. AI-ASSISTED OPPORTUNITY UNDERSTANDING

AI may help interpret free-form company opportunity descriptions.

For example:

```text
Job Description
      ↓
AI/NLP extraction
      ↓
Candidate skills / requirements
      ↓
Normalization
      ↓
Structured opportunity requirements
      ↓
Deterministic matching
```

AI can help extract:

- technologies,
- skills,
- required/preferred classification,
- requested proficiency where reasonably inferable.

However, the final structured requirements should be inspectable and, where appropriate, editable/confirmed.

AI extraction is not itself the final matching decision.

---

# 36. SKILL NORMALIZATION

Different textual names can represent the same canonical skill.

Examples:

```text
React
React.js
ReactJS
```

may map to:

```text
React
```

Similarly:

```text
REST API
REST APIs
RESTful APIs
```

may map to:

```text
REST APIs
```

The platform should use canonical skill identities rather than relying purely on raw strings.

AI can assist with normalization.

Deterministic canonical mapping should remain reliable enough for matching.

---

# 37. AI VS DETERMINISTIC SYSTEM — CENTRAL ARCHITECTURAL PRINCIPLE

The project uses the following boundary:

> **AI understands/extracts information; deterministic algorithms make important decisions.**

This principle should appear consistently across architecture and product behavior.

---

# 38. AI RESPONSIBILITIES

AI is appropriate for tasks involving interpretation of unstructured or natural-language information.

Potential AI responsibilities:

### Opportunity understanding

- extract skills,
- normalize skill terminology,
- identify likely requirements,
- help classify required/preferred information.

### Project/GitHub evidence

- identify technologies,
- identify potential supporting skills,
- summarize project evidence,
- interpret unstructured project descriptions.

### Recommendations

- explain skill gaps,
- personalize learning guidance,
- produce natural-language recommendations.

---

# 39. DETERMINISTIC RESPONSIBILITIES

Deterministic logic owns critical decisions:

- authentication,
- authorization,
- company verification state,
- assessment scoring,
- verification rules,
- eligibility,
- proficiency comparison,
- required skill comparison,
- preferred skill comparison,
- final match score,
- missing skill determination,
- insufficient proficiency determination,
- verified/potential match classification,
- college aggregate calculations,
- permission enforcement.

---

# 40. WHAT AI MUST NOT DECIDE

AI must NOT independently determine:

- whether a company is verified,
- whether a company can publish,
- whether an assessment is officially passed,
- whether a student is eligible,
- the authoritative match score,
- whether a required skill is satisfied,
- whether a skill is officially verified solely from an AI inference,
- whether a student should be hired.

The final hiring decision remains with the company.

---

# 41. WHY THIS AI BOUNDARY MATTERS

If AI were allowed to produce the final match score directly, the system could become:

- opaque,
- difficult to debug,
- difficult to explain,
- difficult to reproduce,
- harder to trust.

The intended architecture instead is:

```text
Unstructured Information
        ↓
       AI
        ↓
Structured Information
        ↓
Deterministic Business Rules
        ↓
Explainable Result
```

This is a major design principle.

---

# 42. MATCHING ENGINE

The matching engine is the core intelligence of the platform.

It should compare:

```text
Student Capability
        VS
Opportunity Requirements
```

while considering:

- eligibility,
- required skills,
- preferred skills,
- proficiency,
- verification.

---

# 43. MATCHING PIPELINE

The intended conceptual pipeline is:

```text
Student Profile
       |
       v
Verified Skills + Proficiency
       |
       v
Eligibility Gate
       |
       v
Required Skill Evaluation
       |
       v
Preferred Skill Evaluation
       |
       v
Proficiency Evaluation
       |
       v
Verification Evaluation
       |
       v
Deterministic Match Calculation
       |
       +--> Match Score
       +--> Matched Skills
       +--> Missing Skills
       +--> Insufficient Skills
       +--> Verification State
       +--> Explanation
```

---

# 44. MATCHING STAGE 1 — ELIGIBILITY

Eligibility is not simply another skill.

If an opportunity has a hard mandatory eligibility requirement and the student fails it, the student should be treated as:

```text
Not Eligible
```

rather than merely receiving a lower skill score.

Examples of possible eligibility requirements:

- academic conditions,
- year restrictions,
- other explicitly mandatory company conditions,
- other requirements formally defined by the opportunity.

Exact eligibility fields/rules belong in the PRD.

---

# 45. MATCHING STAGE 2 — REQUIRED SKILLS

Required skills are evaluated first/strongly.

For each required skill, the engine should distinguish:

1. verified and sufficient proficiency,
2. verified but insufficient proficiency,
3. claimed but unverified,
4. missing.

This is more informative than a simple true/false comparison.

---

# 46. MATCHING STAGE 3 — PREFERRED SKILLS

Preferred skills are evaluated separately.

Possible states:

- verified,
- claimed/unverified,
- missing.

Preferred skills should contribute positively but less strongly than required skills.

---

# 47. MATCHING STAGE 4 — PROFICIENCY

Proficiency must influence the match.

If an opportunity requires:

```text
Intermediate
```

then conceptually:

```text
Advanced       → sufficient/full credit
Intermediate   → sufficient/full credit
Beginner       → partial/insufficient
Missing        → no credit
```

The exact mathematical treatment must be defined deliberately in the PRD.

Do not invent arbitrary weights merely for implementation convenience.

---

# 48. MATCHING STAGE 5 — VERIFICATION

Verification affects the strength of a match.

Example:

```text
Node.js — Verified — Intermediate
```

is a stronger signal than:

```text
Node.js — Claimed — Intermediate — Unverified
```

The platform can distinguish:

### Verified Match

The skill is sufficiently supported/verified.

### Potential Match

The student has claimed/provided evidence for the skill, but verification is incomplete.

This distinction should improve transparency.

---

# 49. MATCH SCORE

The final score must be:

- deterministic,
- explainable,
- proficiency-aware,
- verification-aware,
- required/preferred-aware,
- eligibility-aware.

It must NOT be an opaque AI-generated percentage.

Conceptually:

```text
Eligibility
    +
Required Skill Satisfaction
    +
Preferred Skill Satisfaction
    +
Proficiency
    +
Verification
    =
Explainable Match Result
```

---

# 50. EARLIER SIMPLE MATCH EXAMPLE

A basic conceptual example discussed during the project was:

### Opportunity requires

- Node.js
- Express.js
- MongoDB
- Git
- REST APIs

### Student has verified

- Node.js
- Express.js
- REST APIs

### Basic raw skill overlap

```text
Matched = 3
Required = 5

3 / 5 × 100 = 60%
```

The earlier 60% example is useful for understanding basic overlap.

However, the final platform is NOT supposed to stop at simple:

```text
matched / required
```

The locked design adds:

- eligibility,
- required/preferred weighting,
- proficiency,
- verification,
- explainability.

Therefore the final match engine is richer than the simple 60% calculation.

---

# 51. MATCH EXPLANATION

A result should not be only:

```text
Match Score: 78%
```

It should communicate why.

A conceptual explanation could be:

> You match 75% of required skills and 100% of preferred skills. MongoDB is currently unverified, and your Express.js proficiency is below the requested level.

The exact percentages in such examples are illustrative.

The important concept is:

```text
Score
+
Matched Skills
+
Missing Skills
+
Insufficient Skills
+
Verification explanation
```

---

# 52. MATCH RESULT SHOULD BE ACTIONABLE

A student should be able to go from:

```text
I am not a perfect match
```

to:

```text
I know exactly what I need to improve.
```

Therefore the system should show:

- missing required skills,
- insufficient-proficiency skills,
- unverified claimed skills,
- preferred skills that could strengthen the profile.

---

# 53. SKILL GAP ANALYSIS

The core gap concept is:

```text
Opportunity Requirements
          -
Student Verified Capabilities
          =
Skill Gap
```

But the gap should be more nuanced than a simple subtraction.

Possible categories:

### Missing

The student has no meaningful claim/evidence.

### Unverified

The student claims the skill or has supporting evidence, but it is not sufficiently verified.

### Insufficient proficiency

The student has the skill verified at a level below the opportunity's requirement.

### Optional improvement

A preferred skill could improve the candidate's fit.

---

# 54. LEARNING RECOMMENDATIONS

The platform should use skill-gap information to recommend what the student should improve.

The deterministic system identifies:

```text
What is missing?
What is insufficient?
What is unverified?
What is most relevant?
```

AI can then help explain:

- why the skill matters,
- what to learn,
- what kind of project/evidence could help,
- how it relates to the student's goal,
- how improvement could affect opportunity fit.

The recommendation layer should not invent gaps that contradict the structured matching result.

---

# 55. OPPORTUNITY RECOMMENDATION

Students should receive relevant opportunities based on:

- verified skills,
- proficiency,
- eligibility,
- career goals,
- interests,
- opportunity requirements,
- match results.

The recommendation system should avoid simply showing every opportunity.

It should prioritize relevance.

The exact ranking formula can be formalized later.

---

# 56. COMPANY CANDIDATE DISCOVERY

Verified companies should be able to discover relevant students.

Candidate discovery can use:

- opportunity requirements,
- verified skills,
- proficiency,
- eligibility,
- match information.

A company should be able to understand why a student is relevant.

The platform reduces screening noise.

It does not automate hiring.

---

# 57. COMPANY HIRING DECISION BOUNDARY

The platform may say:

> "This student is a strong match."

It must not say:

> "Hire this student."

The final hiring decision remains with the company/human decision-maker.

---

# 58. COMPANY–STUDENT INTERACTION SCOPE

The product should create meaningful interaction without becoming a full LinkedIn/ATS replacement.

### MVP includes

- professional student profiles,
- opportunity discovery,
- candidate discovery,
- relevant skill visibility,
- match information,
- application/interest.

### MVP does not require

- chat,
- real-time messaging,
- complex recruitment pipelines,
- full ATS,
- interview scheduling,
- advanced hiring management.

---

# 59. STUDENT PROFILE VISIBILITY

Professional discoverability is useful.

However:

> Professional discoverability does not mean unrestricted exposure of sensitive personal data.

Relevant public/professional information may include:

- skills,
- proficiency,
- education,
- projects,
- GitHub,
- portfolio,
- achievements.

Sensitive contact information should be controlled appropriately.

---

# 60. COLLEGE / INSTITUTION ROLE

The college is a meaningful participant.

It is NOT merely a decorative dashboard.

The college provides institutional context and uses aggregated skill intelligence.

---

# 61. COLLEGE ASSOCIATION

Students should be associated with an institution.

Relevant institutional context may include:

- college,
- department,
- course,
- year,
- batch.

The exact affiliation/confirmation workflow should be defined in the PRD.

---

# 62. COLLEGE ANALYTICS

The college dashboard should provide aggregated information such as:

- skill distribution,
- verified vs unverified skills,
- common skill gaps,
- career-interest trends,
- department-wise analysis,
- year-wise analysis,
- batch-wise analysis,
- potentially industry-demand vs student-skill comparison.

The purpose is to help institutions understand skill readiness and gaps.

---

# 63. COLLEGE IS NOT A FULL ERP

The MVP does NOT need:

- attendance,
- marks management,
- complete ERP,
- full placement management,
- every college administrative workflow.

The platform's institutional role is:

```text
Institutional Context
        +
Aggregated Skill Intelligence
```

not:

```text
Complete College Operating System
```

---

# 64. COLLEGE DOES NOT MANUALLY VERIFY EVERY SKILL

The platform itself is responsible for the skill verification mechanism.

The college should not have to:

- conduct every assessment,
- manually verify every skill,
- manually evaluate every GitHub repository.

The college consumes the resulting intelligence.

---

# 65. PRIVACY PRINCIPLES

Privacy must be considered from the beginning.

Important principles:

- not every user field should be public,
- sensitive contact information should not automatically be exposed,
- role-based access must be enforced,
- college analytics should be appropriately aggregated,
- students should have appropriate control over visibility,
- companies should access only information they are authorized to see.

Exact privacy rules belong in the PRD.

---

# 66. ADMIN ROLE

Admin is the governance layer.

Admin responsibilities may include:

- company verification/rejection,
- user/platform management,
- moderation,
- reports,
- basic monitoring,
- governance operations.

Admin should not be used as a catch-all feature to bypass normal product rules.

---

# 67. ADMIN VS SYSTEM AUTHORITY

Some decisions should be made by platform rules rather than arbitrary admin intervention.

For example:

```text
Admin verifies company
        ↓
Company becomes verified
        ↓
Company can publish
```

Admin does not need to manually create a hidden "approved job" path.

Similarly, match scores should come from the matching engine rather than an admin manually assigning scores.

---

# 68. MVP PHILOSOPHY

The MVP should prove the central value proposition.

It should NOT attempt to implement every imaginable feature related to:

- jobs,
- education,
- AI,
- recruitment,
- social networking.

The strongest MVP is a focused end-to-end demonstration of:

```text
Student
   ↓
Skill Declaration
   ↓
Assessment / Evidence
   ↓
Verification
   ↓
Opportunity
   ↓
Matching
   ↓
Explanation
   ↓
Skill Gap
   ↓
Recommendation
```

with:

```text
Company → Verified Opportunities → Candidate Discovery
College  → Aggregated Skill Intelligence
```

---

# 69. MVP — STUDENT

Essential:

- registration/login,
- profile,
- college association,
- career goals/interests,
- skill declaration,
- proficiency declaration,
- assessments,
- assessment scoring,
- verification state,
- basic integrity signals,
- project/GitHub evidence,
- opportunity discovery,
- matching,
- skill-gap view,
- recommendations,
- basic application/interest.

---

# 70. MVP — VERIFICATION

Essential:

- skill assessments,
- objective scoring,
- proficiency,
- verification status,
- supporting project/GitHub evidence,
- reasonable integrity signals,
- confidence/evidence representation.

---

# 71. MVP — COMPANY

Essential:

- company registration,
- verification workflow,
- verified/unverified state,
- opportunity creation,
- opportunity publishing after verification,
- structured requirements,
- candidate discovery.

---

# 72. MVP — OPPORTUNITY

Essential:

- title,
- description,
- required skills,
- preferred skills,
- proficiency requirements,
- eligibility,
- location,
- work mode,
- deadline.

---

# 73. MVP — MATCHING

Essential:

- eligibility gate,
- required skill matching,
- preferred skill matching,
- proficiency awareness,
- verification awareness,
- deterministic score,
- explanation,
- matched skills,
- missing skills,
- insufficient skills,
- verified/potential distinction where appropriate.

---

# 74. MVP — AI

AI should be moderate and targeted rather than used everywhere.

Useful MVP AI areas:

- job-description skill extraction,
- skill normalization,
- project/GitHub evidence analysis,
- personalized learning recommendations.

AI should NOT own:

- company verification,
- assessment scoring,
- official verification decisions,
- eligibility,
- official match score,
- final hiring decisions.

---

# 75. MVP — COLLEGE

Essential:

- institution association,
- institutional context,
- aggregated analytics,
- skill distribution,
- verified/unverified distribution,
- common skill gaps,
- career-interest trends,
- useful department/year/batch filtering.

---

# 76. MVP — ADMIN

Essential:

- company verification/rejection,
- user/platform management,
- moderation/report handling,
- basic monitoring.

---

# 77. FUTURE SCOPE — OPPORTUNITY AGGREGATION

Possible future features:

- authorized LinkedIn integration where available,
- job portal integrations,
- external APIs,
- feeds,
- automated opportunity aggregation.

External aggregation is intentionally not required to prove the MVP.

---

# 78. FUTURE SCOPE — ADVANCED RECRUITMENT

Possible future:

- chat,
- messaging,
- interview scheduling,
- ATS,
- advanced pipelines,
- automated recruitment workflows,
- advanced hiring management.

---

# 79. FUTURE SCOPE — ADVANCED VERIFICATION

Possible future:

- advanced AI proctoring,
- facial recognition where appropriate,
- advanced plagiarism detection,
- behavioral analysis,
- stronger assessment integrity mechanisms.

The product should never promise perfect cheat detection.

---

# 80. FUTURE SCOPE — ADVANCED AI

Potential future:

- career chatbot,
- resume builder,
- interview coach,
- sophisticated career prediction,
- advanced ML recommendation models.

Even in future versions, critical high-impact decisions should remain explainable and governed by appropriate rules rather than blindly delegated to an opaque model.

---

# 81. FUTURE SCOPE — LEARNING ECOSYSTEM

Potential future:

- course marketplace,
- integrated learning platform,
- certifications,
- learning progress,
- large personalized learning ecosystem.

The MVP is not a complete LMS.

---

# 82. FUTURE SCOPE — COLLEGE ERP

Potential future integrations:

- attendance,
- marks,
- full placement ERP,
- institutional administration.

Not MVP.

---

# 83. EXPLICIT NON-GOALS

The MVP is NOT:

- a LinkedIn clone,
- a complete job portal,
- a complete ATS,
- a college ERP,
- a learning management system,
- an AI-only career platform,
- a social network,
- an AI proctoring platform,
- an automated hiring decision system.

This boundary exists to protect focus.

---

# 84. TECHNICAL DIRECTION

The intended stack is:

## Frontend

- React
- TypeScript

## Backend

- Node.js
- Express
- TypeScript

## Database

- MongoDB
- Mongoose

This is the intended MERN-based direction.

---

# 85. HIGH-LEVEL ARCHITECTURE

```text
                ┌─────────────────────┐
                │    React Frontend   │
                │    TypeScript       │
                └──────────┬──────────┘
                           │
                        HTTPS/API
                           │
                           v
                ┌─────────────────────┐
                │ Node.js + Express   │
                │     Backend         │
                │     TypeScript      │
                └───────┬─────┬───────┘
                        │     │
                        │     └──────────────┐
                        v                    v
                ┌──────────────┐    ┌────────────────┐
                │   MongoDB    │    │ AI Services /  │
                │  + Mongoose  │    │ External APIs  │
                └──────────────┘    └────────────────┘
```

The exact deployment architecture can evolve.

---

# 86. FRONTEND / BACKEND DEPLOYMENT

Frontend and backend may be deployed separately.

For example:

```text
Frontend Hosting
       |
       | HTTPS API requests
       v
Backend Hosting
       |
       v
MongoDB
```

Separate deployment does not prevent communication; APIs connect the two systems.

Cross-origin access must be configured securely when origins differ.

---

# 87. BACKEND AS BUSINESS AUTHORITY

The backend should own critical business rules.

The frontend must NOT be trusted to authoritatively calculate:

- match score,
- verification status,
- eligibility,
- company verification,
- permissions.

The frontend displays backend results.

---

# 88. AUTHENTICATION AND AUTHORIZATION

The platform needs authentication and role-based authorization.

Conceptually:

```text
User logs in
    ↓
Authenticated identity
    ↓
Role identified
    ↓
Permission checked
    ↓
Action allowed/denied
```

Examples:

- Student manages own profile.
- Company manages its opportunities.
- Unverified company cannot publish.
- College accesses authorized institutional analytics.
- Admin performs governance operations.

The exact JWT/session implementation belongs in the PRD/technical design.

---

# 89. SECURITY PRINCIPLES

The system should include:

- secure authentication,
- authorization,
- password security,
- backend validation,
- role enforcement,
- safe API design,
- privacy controls,
- assessment protection,
- protection against score manipulation,
- auditability of sensitive actions,
- secure handling of links/files/evidence.

Client-side values must never be treated as authoritative for important decisions.

---

# 90. DATA MODEL — CONCEPTUAL ENTITIES

Likely entities include:

- User
- Student Profile
- Company
- College / Institution
- Skill
- Student Skill
- Assessment
- Assessment Question
- Assessment Attempt
- Verification Record
- Project
- GitHub/Portfolio Evidence
- Opportunity
- Opportunity Skill Requirement
- Application / Interest
- Match Result
- Learning Recommendation
- Analytics/Aggregation structures
- Report/Moderation record
- Audit information

This is conceptual.

The final schema should be designed based on actual access patterns and product requirements.

Do not create unnecessary models merely to make the architecture look complex.

---

# 91. SKILL DATA MODEL PRINCIPLE

A student's skill representation should preserve:

```text
Student
   +
Canonical Skill
   +
Declared Proficiency
   +
Verification Status
   +
Verified Proficiency
   +
Evidence
   +
Assessment History
```

The exact implementation may differ, but the semantic distinction must remain.

---

# 92. OPPORTUNITY DATA MODEL PRINCIPLE

An opportunity should preserve:

```text
Company
   +
Opportunity
   +
Required Skills
   +
Preferred Skills
   +
Minimum Proficiency
   +
Eligibility
   +
Location / Work Mode
   +
Deadline
```

This structured data is what enables deterministic matching.

---

# 93. MATCH DATA MODEL PRINCIPLE

A match result should be reproducible from structured inputs.

Conceptually:

```text
Student Snapshot
+
Opportunity Snapshot
+
Matching Rules Version
=
Match Result
```

This is useful for:

- debugging,
- explainability,
- consistency,
- auditability.

The implementation details can be formalized later.

---

# 94. AI DATA BOUNDARY

AI-generated information should ideally be represented separately from authoritative business data.

Conceptually:

```text
AI Extracted Skill
       ↓
Candidate / Suggested Data
       ↓
Validation / Confirmation / Normalization
       ↓
Structured Requirement or Evidence Signal
       ↓
Business Logic
```

This prevents accidental elevation of AI guesses into unquestionable facts.

---

# 95. OBSERVABILITY / AUDITABILITY

Important actions should be traceable.

Potential actions:

- company verification,
- company rejection,
- opportunity publishing,
- assessment attempts,
- verification changes,
- role/permission changes,
- administrative actions,
- moderation.

This is especially important because the platform's value depends on trust.

---

# 96. EDGE CASES — SKILLS

The product should account for:

### Student claims skill but fails assessment

The skill should not be treated as verified merely because it was declared.

### Student claims Beginner but performs at higher level

The system may represent verified proficiency according to defined rules.

### Student claims Advanced but evidence is weak

The self-declared Advanced label should not automatically become verified Advanced.

### Student has project evidence but no assessment

Evidence can support the profile but should not automatically equal verification unless the defined verification rules explicitly allow it.

### Skill aliases

React/React.js/ReactJS should normalize appropriately.

### Skill mismatch

A similarly named but materially different skill should not be incorrectly merged.

---

# 97. EDGE CASES — OPPORTUNITIES

Consider:

- company pending verification,
- company rejected,
- company suspended/unverified after previously being verified,
- opportunity expired,
- opportunity closed,
- missing deadline,
- malformed requirements,
- duplicate skill requirements,
- AI incorrectly extracts a skill,
- AI misses a skill,
- company manually corrects AI extraction,
- hard eligibility failure,
- required skill missing,
- required skill unverified,
- required skill below proficiency.

---

# 98. EDGE CASES — EVIDENCE

Consider:

- inaccessible GitHub repository,
- deleted repository,
- private repository,
- duplicate repository,
- project copied from elsewhere,
- repository contains a technology but student may not have authored it,
- AI misinterprets project technology,
- evidence is old,
- evidence is insufficient for verification.

The system should avoid overstating what evidence proves.

---

# 99. EDGE CASES — ASSESSMENT

Consider:

- assessment timeout,
- repeated attempts,
- suspicious timing,
- tab switching,
- incomplete assessment,
- failed assessment,
- network interruption,
- duplicate submissions,
- client-side score manipulation.

Integrity signals should be treated as signals, not automatic proof of misconduct.

---

# 100. EDGE CASES — COLLEGE

Consider:

- student changes college,
- student changes department,
- student changes year,
- incorrect affiliation,
- multiple institutional associations if supported,
- privacy restrictions on institutional analytics,
- small groups where aggregate data could expose individuals.

Exact privacy thresholds belong in PRD.

---

# 101. EDGE CASES — AI

AI may:

- hallucinate a skill,
- miss a skill,
- misunderstand a job description,
- incorrectly normalize a technology,
- overstate evidence,
- produce an irrelevant recommendation.

Therefore AI outputs need appropriate boundaries and validation.

---

# 102. PRODUCT EXPLAINABILITY

Every important automated result should be understandable.

For matching:

```text
Why matched?
Why not matched?
What is missing?
What is insufficient?
What is unverified?
What eligibility rule failed?
```

For recommendations:

```text
Why is this skill recommended?
Which opportunity/goal does it relate to?
```

For verification:

```text
What evidence contributed?
What remains unverified?
```

---

# 103. UX TRUST SIGNALS

The interface should make states visually and conceptually clear:

- Verified
- Unverified
- Claimed
- Evidence-supported
- Beginner
- Intermediate
- Advanced
- Eligible
- Not Eligible
- Matched
- Missing
- Insufficient

The product should not use a single generic "skill" badge for all states.

---

# 104. PROFESSIONAL UX DIRECTION

The platform should feel:

- modern,
- professional,
- trustworthy,
- clear,
- responsive,
- easy to understand.

Important screens should prioritize information hierarchy.

For example, an opportunity page should make it easy to see:

```text
Opportunity
   ↓
Eligibility
   ↓
Required Skills
   ↓
Preferred Skills
   ↓
Your Match
   ↓
Your Gaps
   ↓
What to Improve
```

---

# 105. SIH DEMO EXPERIENCE

The demo should tell a coherent story.

A strong demonstration sequence:

### Step 1

Show a student profile.

### Step 2

Show self-declared skills.

### Step 3

Show assessment/evidence.

### Step 4

Show verified skills and proficiency.

### Step 5

Show a verified company's opportunity.

### Step 6

Show required/preferred skills and eligibility.

### Step 7

Run/display deterministic matching.

### Step 8

Show:

- score,
- matched skills,
- missing skills,
- insufficient skills,
- verification information.

### Step 9

Show skill-gap recommendation.

### Step 10

Show company discovering relevant candidate(s).

### Step 11

Show college dashboard with aggregated skill gaps.

This demonstrates the ecosystem rather than isolated features.

---

# 106. DEMO DATA PRINCIPLE

Demo data should make the system reliable during judging.

But the demo must still represent the real architecture.

Do NOT build a fake flow where:

```text
Admin secretly inserts company job
```

and then claim it represents normal publishing.

Instead:

```text
Pre-seeded Verified Demo Company
       ↓
Pre-seeded Opportunity
       ↓
Normal Matching
```

This preserves credibility.

---

# 107. EXAMPLE STUDENT PROFILE

A representative example used during earlier project discussions was a student named Rahul.

Illustrative verified profile:

```text
Career Goal: Backend Developer

JavaScript    — Intermediate
Node.js       — Beginner
Express.js    — Beginner
MongoDB       — Not verified
Git           — Not verified
REST APIs     — Intermediate
```

This example was used to reason about matching and verification.

It is an illustrative product example, not hard-coded seed data unless deliberately chosen later.

---

# 108. EXAMPLE OPPORTUNITIES

The earlier conceptual examples included:

### Backend Internship 1

Required:

- Node.js
- Express.js
- MongoDB
- Git
- REST APIs

### Backend Internship 2

Required:

- Node.js
- MongoDB
- JWT
- Git

### Backend Internship 3

Required:

- Node.js
- Express.js
- SQL
- REST APIs

These examples illustrate why a student's fit can differ across opportunities.

---

# 109. SKILL DEMAND / FREQUENCY IDEA

An earlier product concept was to analyze opportunity requirements to identify skill frequency.

For example:

```text
Node.js appears in 90% of relevant backend opportunities.
```

This can help a student understand:

> Which skills are broadly valuable for my target role?

This can become part of skill-gap intelligence/recommendation in a properly defined implementation.

The exact percentage must come from actual stored opportunity data rather than being invented.

---

# 110. CAREER-ROLE SKILL INTELLIGENCE

The platform can eventually aggregate opportunity requirements to answer:

```text
For Backend Developer opportunities:
Which skills appear most frequently?
Which proficiency levels are commonly requested?
Which skills are missing in our students?
```

This can support:

- student learning recommendations,
- college analytics,
- industry-demand insight.

The MVP should implement only what can be done reliably within scope.

---

# 111. MATCHING VS GENERAL RECOMMENDATION

These should remain conceptually separate.

### Matching

Question:

> How well does this student match this specific opportunity?

Uses deterministic opportunity/student requirements.

### Recommendation

Question:

> Which opportunities should this student see first?

Can use:

- match score,
- eligibility,
- career goals,
- interests,
- other ranking factors.

The recommendation layer can rank matches but should not secretly alter the underlying match score.

---

# 112. VERIFICATION VS MATCHING

These are also separate.

### Verification

Question:

> How strong is the evidence that the student possesses this skill?

### Matching

Question:

> Given the student's verified capabilities, how well do they fit this opportunity?

This separation makes the architecture easier to reason about.

---

# 113. AI VS MATCHING

Likewise:

### AI extraction

```text
What skills appear in this text/evidence?
```

### Matching algorithm

```text
Given structured skills, what is the match?
```

The AI should not be allowed to blur these boundaries.

---

# 114. PRODUCT TRUST HIERARCHY

A useful conceptual hierarchy is:

```text
Self Claim
   ↓
Supporting Evidence
   ↓
Assessment Evidence
   ↓
Verification Rules
   ↓
Verified Skill
   ↓
Deterministic Matching
   ↓
Explainable Opportunity Fit
```

The platform's credibility comes from keeping this chain understandable.

---

# 115. EXTENSIBILITY

The system should be designed so that future features can be added without rewriting the entire product.

Future possibilities include:

- more opportunity sources,
- richer verification,
- advanced AI,
- more assessment types,
- learning integrations,
- recruitment integrations,
- institutional integrations.

But extensibility does NOT mean implementing all of them now.

---

# 116. AVOID OVER-ENGINEERING

This is an SIH MVP.

Do not introduce:

- microservices just for appearance,
- complex distributed architecture,
- unnecessary queues,
- excessive abstraction,
- elaborate infrastructure,
- enterprise-scale systems without a requirement.

A clean modular MERN application is sufficient.

---

# 117. TECHNICAL SPECIFICATION BOUNDARY

A separate `TECHNICAL_SPEC.md` is not required at this stage.

The initial structure can be:

```text
PROJECT_CONTEXT.md
PRD.md
GEMINI.md
```

Technical details can be captured inside the PRD at an appropriate level.

If implementation details become large later, a dedicated technical specification can be created.

---

# 118. FRONTEND / BACKEND SEPARATION

The frontend and backend are separate applications logically, and may be deployed separately.

They communicate through APIs.

For example:

```text
React
  |
  | Axios/fetch/HTTP
  v
Express API
  |
  v
Mongoose
  |
  v
MongoDB
```

The specific library choices can be finalized during implementation.

---

# 119. IMPORTANT BASIC TECHNICAL CONCEPTS ALREADY CONSIDERED

The project development discussions have included concepts such as:

- Node.js,
- Express,
- React,
- MERN,
- TypeScript,
- MongoDB,
- Mongoose,
- CORS,
- JWT/authentication,
- API communication,
- Axios/fetch,
- package.json,
- separate frontend/backend package.json files,
- backend/frontend deployment,
- database models,
- asynchronous operations,
- error handling,
- middleware.

These concepts support implementation, but this context file should not turn into a programming tutorial.

---

# 120. DATABASE STRUCTURE PHILOSOPHY

One database can contain multiple collections/models.

A model represents a structured type of data.

The application should organize models according to product entities.

Do not create multiple databases merely because there are multiple models.

The actual database architecture should be determined by product needs.

---

# 121. ERROR HANDLING / BACKEND QUALITY

Backend operations should be structured so that:

- errors are propagated consistently,
- asynchronous failures are handled,
- authorization is enforced,
- validation occurs before critical writes,
- important business rules cannot be bypassed by the frontend.

The exact Express architecture belongs in implementation documentation/code.

---

# 122. CORS CONCEPT

If frontend and backend are deployed at different origins, controlled cross-origin API access may be required.

CORS should be configured deliberately.

It should not be treated as a security substitute for authentication/authorization.

---

# 123. FILE / PROJECT EVIDENCE HANDLING

If students submit or reference files/projects, the platform should distinguish:

- metadata,
- actual evidence,
- links,
- processing status,
- analysis results,
- verification outcome.

A file storage mechanism is not the same thing as a database.

The exact storage strategy should be selected during technical implementation based on requirements.

---

# 124. AUTHORIZATION PRINCIPLE

Never rely solely on UI restrictions.

For example:

Hiding "Publish Opportunity" from an unverified company in React is insufficient.

The backend must also reject:

```text
POST /opportunities
```

when the company is not verified.

Similarly, students must not be able to modify:

- verification status,
- authoritative match score,
- assessment result.

---

# 125. DATA CONSISTENCY

The system should ensure that matching uses consistent canonical data.

For example:

```text
ReactJS
React.js
React
```

should not accidentally become three unrelated skills.

Likewise, proficiency labels should have consistent semantics.

---

# 126. VERSIONING CONSIDERATION

Because matching and verification rules may evolve, future technical design may benefit from tracking:

- rule versions,
- assessment versions,
- skill taxonomy versions.

This is a design consideration rather than a mandatory MVP implementation unless needed.

---

# 127. EXPLAINABILITY OVER COMPLEXITY

If a sophisticated ML model gives a slightly better prediction but cannot explain why, it should not automatically replace the deterministic matching engine.

The project's differentiator is trustworthy matching.

The preferred principle is:

```text
Simple + Explainable + Reliable
```

before:

```text
Complex + Opaque + Impressive-looking
```

---

# 128. SUCCESS CRITERIA — CONCEPTUAL

The product should ultimately demonstrate that:

### Students

- can create profiles,
- can verify skills,
- can understand opportunities,
- can understand their gaps,
- can improve their fit.

### Companies

- can publish verified opportunities,
- can discover relevant candidates,
- can understand candidate fit.

### Colleges

- can understand aggregate skill readiness,
- can identify common gaps,
- can observe career-interest trends.

### Platform

- provides explainable matching,
- avoids treating claims as verification,
- uses AI appropriately,
- preserves deterministic decision-making.

Exact numerical KPIs belong in the PRD.

---

# 129. QUALITY BAR

The project should be judged against:

## Product correctness

Does it actually solve the stated disconnect?

## Trust

Does it distinguish claims from verification?

## Matching quality

Does it consider more than keyword overlap?

## Explainability

Can users understand results?

## AI discipline

Is AI used where useful rather than everywhere?

## Scope discipline

Does the MVP avoid becoming an enormous platform?

## Technical quality

Is the architecture clean and maintainable?

## Demo quality

Can the complete ecosystem be demonstrated reliably?

---

# 130. THINGS THE AI AGENT MUST NOT ASSUME

An AI agent working on this project must NOT assume:

1. Every declared skill is verified.
2. Self-declared proficiency is verified proficiency.
3. GitHub automatically proves proficiency.
4. AI analysis automatically verifies a skill.
5. AI should calculate the official match score.
6. AI should decide eligibility.
7. AI should decide hiring.
8. AI should verify companies.
9. Unverified companies can publish.
10. Admin can bypass company verification.
11. Demo records justify production authorization bypasses.
12. LinkedIn scraping is automatically allowed.
13. External job aggregation is an MVP requirement.
14. The college needs to become an ERP.
15. The product needs a complete ATS.
16. The product needs real-time chat in MVP.
17. The product needs a full LMS.
18. Every feature should use AI.
19. More complexity automatically means a better hackathon solution.
20. A simple percentage is sufficient for final matching.
21. A hard eligibility failure should merely reduce a score.
22. Required and preferred skills are equivalent.
23. Beginner and Intermediate are equivalent when Intermediate is required.
24. Missing and unverified skills are the same thing.
25. AI outputs are always correct.
26. Assessment integrity signals prove cheating.
27. The platform can promise perfect cheat detection.
28. A high match score means the company must hire the student.
29. Professional discoverability means all personal data should be public.
30. College analytics should expose individual sensitive information by default.

---

# 131. HARD-LOCKED PRODUCT DECISIONS

The following decisions are currently locked and should be treated as product constraints.

## Users

- Student
- Company
- College/Institution
- Admin

## Verification

- Skill declaration ≠ skill verification.
- Student-declared proficiency exists.
- Beginner/Intermediate/Advanced are supported.
- Newly declared skills are unverified.
- Assessments are a core verification mechanism.
- Practical/coding questions are appropriate for technical skills.
- Question banks/randomization may be used.
- Integrity signals may be recorded.
- Perfect cheat detection is not claimed.
- GitHub/project evidence supports but does not automatically prove proficiency.
- AI may assist with evidence analysis.
- Verification is confidence/evidence-based.

## Opportunities

- MVP opportunities primarily come from companies on the platform.
- Companies must be verified before publishing.
- Pending/unverified companies cannot publish.
- Admin cannot bypass verification to publish.
- Seeded verified demo company/opportunities are allowed.
- Demo metadata is not a publishing bypass.
- External job sources/APIs are future scope.
- Opportunity has required/preferred skills.
- Opportunity can specify proficiency.
- Opportunity has eligibility.

## Matching

- Eligibility is a hard gate where mandatory.
- Required skills carry more weight.
- Preferred skills have lower weight.
- Proficiency matters.
- Verification matters.
- Final score is deterministic.
- Final score is explainable.
- AI does not independently generate the official score.
- Missing/insufficient skills are shown.
- Verified vs potential match can be distinguished.

## AI

- AI extracts/understands unstructured information.
- AI can normalize skills.
- AI can assist project/GitHub evidence analysis.
- AI can assist personalized learning recommendations.
- Deterministic logic handles critical decisions.

## Company/student

- Verified companies can discover relevant candidates.
- Student professional profiles are discoverable in an appropriate controlled manner.
- Sensitive contact information is not automatically exposed.
- Chat/messaging is future scope.
- Full ATS is future scope.
- Complex recruitment management is future scope.

## College

- College is a meaningful participant.
- College gets aggregated skill analytics.
- College sees common skill gaps and trends.
- Department/year/batch analysis can be supported.
- College is not a full ERP.
- College does not manually verify every skill.

## Technology

- MERN + TypeScript is the intended direction.
- Frontend/backend can be separately deployed.
- APIs connect them.
- Backend owns critical business rules.
- Avoid unnecessary over-engineering.

---

# 132. FUTURE-CHANGE RULE

Locked decisions can be changed in the future if the project owner explicitly changes them.

However, an AI agent should NOT silently reinterpret a locked decision.

If a new request conflicts with this file, the agent should say:

```text
This conflicts with the current locked project decision:
[decision]

Please explicitly decide whether the locked decision should change.
```

This prevents accidental product drift.

---

# 133. TRACEABILITY MINDSET

Every major feature should be traceable to a problem.

For example:

```text
Problem:
Students cannot reliably represent their skills.

Feature:
Assessment-based verification.

Problem:
Companies cannot easily identify relevant students.

Feature:
Verified-skill matching and candidate discovery.

Problem:
Students do not know what they are missing.

Feature:
Skill-gap analysis.

Problem:
Students do not know what to learn next.

Feature:
Learning recommendations.

Problem:
Colleges lack skill-gap visibility.

Feature:
Aggregated college analytics.
```

Features without a clear problem/value connection should be questioned.

---

# 134. THE CENTRAL DIFFERENTIATOR

The most important product distinction is:

```text
Traditional profile:
"I know Node.js."

This platform:
"I claim Node.js."
        ↓
"Here is my evidence."
        ↓
"Here is my assessment performance."
        ↓
"Node.js is verified at Intermediate."
        ↓
"This opportunity requires Intermediate Node.js."
        ↓
"I match this requirement."
```

That is the conceptual difference the product should communicate.

---

# 135. SECONDARY DIFFERENTIATOR

The platform does not stop at:

> "You don't match."

It continues:

```text
You don't match
       ↓
Here is why
       ↓
Here is what you're missing
       ↓
Here is what is insufficient
       ↓
Here is what to improve
       ↓
Here is how improving it can make you more opportunity-ready
```

This makes the system developmental rather than merely filtering candidates.

---

# 136. THIRD DIFFERENTIATOR

The same structured data helps three stakeholders.

```text
Student
  ↓
Personal skill intelligence

Company
  ↓
Candidate/opportunity matching

College
  ↓
Aggregated institutional skill intelligence
```

One common skill model serves the ecosystem.

---

# 137. PRODUCT MATURITY PATH

The intended evolution is:

### Stage 1 — SIH MVP

```text
Verification
+
Structured Opportunities
+
Deterministic Matching
+
Skill Gaps
+
Basic AI Assistance
+
College Analytics
```

### Stage 2

```text
More opportunities
+
More evidence
+
Better recommendations
+
External integrations
```

### Stage 3

```text
Advanced recruitment
+
Advanced verification
+
Learning ecosystem
+
Advanced AI
```

Do not jump directly to Stage 3 during MVP development.

---

# 138. PRD GENERATION EXPECTATION

When generating `PRD.md` from this file, the AI should:

- treat this document as project context,
- preserve locked decisions,
- convert concepts into precise requirements,
- define functional requirements,
- define business rules,
- define workflows,
- define acceptance criteria,
- define non-functional requirements,
- define data requirements,
- define APIs at an appropriate level,
- define security/privacy expectations,
- define edge cases,
- define MVP and future scope,
- define success metrics,
- define definition of done.

The PRD should be project-specific.

It must NOT become a generic:

> "Build a production-ready MERN application."

---

# 139. PRD MUST NOT DO

The PRD should not:

- invent unrelated features,
- silently change locked decisions,
- make AI the final decision-maker,
- add external job aggregation to MVP,
- turn the college into ERP,
- turn the product into LinkedIn,
- turn the product into an ATS,
- turn the product into an LMS,
- over-engineer the backend,
- define arbitrary matching weights without rationale,
- claim perfect skill verification,
- claim perfect cheat detection.

---

# 140. DEFINITION OF A SUCCESSFUL MVP

A successful MVP should allow a judge to follow a believable story:

```text
A student joins.
       ↓
They declare skills.
       ↓
The platform distinguishes claims from verification.
       ↓
They complete an assessment / provide evidence.
       ↓
Relevant skills become verified according to rules.
       ↓
A verified company publishes an opportunity.
       ↓
The opportunity contains structured requirements.
       ↓
The system checks eligibility.
       ↓
The matching engine compares verified skills.
       ↓
The system produces an explainable score.
       ↓
The student sees matched/missing/insufficient skills.
       ↓
The platform identifies a skill gap.
       ↓
The student receives improvement guidance.
       ↓
The company can discover relevant candidates.
       ↓
The college can see aggregated skill gaps.
```

If this flow works reliably, the core product has been demonstrated.

---

# 141. FINAL PRODUCT NORTH STAR

The project should continuously return to this question:

> **Can we make the connection between student capability and industry opportunity more trustworthy, explainable, and actionable?**

If yes, the feature is likely aligned.

If no, its necessity for the MVP should be questioned.

---

# 142. ONE-PARAGRAPH MASTER CONTEXT

We are building an SIH-focused MERN + TypeScript web platform that connects students, verified companies, and colleges through evidence-backed skill intelligence. Students create professional profiles, declare skills and proficiency, complete platform assessments, and provide project/GitHub evidence; declared skills are not automatically verified, assessments provide objective verification signals, project/GitHub evidence provides supporting signals, and the platform represents verification as evidence/confidence rather than absolute proof. Verified companies register and, only after verification, publish structured opportunities containing required/preferred skills, proficiency expectations, eligibility, location/work mode, and deadlines; seeded verified demo companies/opportunities are allowed for SIH demonstration but must not bypass production verification rules. The matching engine is deterministic, explainable, proficiency-aware, verification-aware, and eligibility-aware, comparing verified student capabilities with required and preferred opportunity skills and explaining matched, missing, insufficient, and unverified skills. AI is intentionally targeted at understanding unstructured information—such as extracting/normalizing opportunity skills, analyzing project/GitHub evidence, and generating personalized learning recommendations—while deterministic rules remain authoritative for assessment scoring, verification, eligibility, proficiency evaluation, final match score, skill gaps, permissions, and other critical decisions. Students can discover and apply to relevant opportunities and understand what they need to improve; verified companies can discover relevant professional student profiles; colleges can see aggregated verified/unverified skill distributions, common skill gaps, and career-interest trends without becoming a full ERP. The MVP deliberately excludes external job aggregation, full ATS/recruitment pipelines, chat, advanced AI proctoring, complete LMS functionality, college ERP features, and opaque AI-based final matching. The product's core loop is: **declare → assess/evidence → verify → match → explain → identify gap → improve → connect**, with trust, explainability, focused scope, privacy, and deterministic critical decisions as foundational principles.

---

# 143. FINAL SHORT DESCRIPTION

> **A trusted skill intelligence platform that verifies student capabilities through assessments and supporting evidence, matches them against verified-company opportunities using deterministic and explainable logic, identifies skill gaps, recommends improvements, enables company candidate discovery, and gives colleges aggregated visibility into student skill readiness.**

---

# 144. FINAL PROJECT PRINCIPLES

Remember these seven principles above everything else:

```text
1. CLAIM ≠ VERIFICATION

2. EVIDENCE > UNSUPPORTED CLAIM

3. AI UNDERSTANDS; RULES DECIDE

4. REQUIRED ≠ PREFERRED

5. SKILL NAME ≠ PROFICIENCY

6. MATCH SCORE MUST BE EXPLAINABLE

7. MVP FOCUS > FEATURE COUNT
```

And the broader product philosophy:

```text
TRUST
  +
VERIFICATION
  +
MATCHING
  +
EXPLAINABILITY
  +
SKILL-GAP INTELLIGENCE
  +
ACTIONABLE IMPROVEMENT
  =
CORE PRODUCT VALUE
```

---

# 145. END OF PROJECT CONTEXT

This document is intended to be the durable context layer for the project.

The next document in the product-definition chain is `PRD.md`.

The PRD should use this context to define the exact product requirements without losing the principles, constraints, and decisions captured here.

