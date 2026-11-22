# Portfolio content checklist

## Case study intake

The repository contained six generic project examples with stock images and placeholder links. They were removed rather than presented as Chirag’s work. The public portfolio keeps a clear work section, but real case studies still need verified source details.

For each project, supply:

- Project name and category
- Public demo and repository links, if shareable
- Screenshots or approved product imagery
- The problem or requirement
- Project goals and the solution delivered
- Chirag’s specific contribution
- Technologies actually used
- Key features and relevant architecture
- Challenges and implementation details
- AI-assisted workflow details, only if used on that project
- Outcomes or metrics, only when documented and approved
- Related projects

## Experience descriptions

The public profile could not be fetched during the redesign. The employers, titles and dates shown on the site come from the supplied brief. Add verified role-specific responsibilities or achievements if you want the experience entries to be more detailed.

## Contact form

The existing EmailJS integration and environment variable names are retained. Configure `VITE_YOUR_SERVICE_ID`, `VITE_YOUR_TEMPLATE_ID` and `VITE_YOUR_PUBLIC_KEY` in each deployment environment. The EmailJS template should accept `name`, `email`, `project_type`, `subject` and `message` fields, and its recipient must be the inbox that should receive inquiries. A configured environment variable does not confirm that the EmailJS service exists or that its Gmail authorization is valid. The last reported provider errors were “The service ID not found” and “Gmail_API: Invalid grant”; verify the service ID in the EmailJS dashboard and reconnect the Gmail account, then update the Vercel environment variables and redeploy. The form reports a sent state only after EmailJS resolves successfully. When delivery fails, it keeps the form values and offers a prefilled email draft instead.
