# Crash Course server runtime

Supported Sites Vinext starter, retained for hosted server routes and static asset delivery. Existing Crash Course HTML/JS stays in ../dist as authored source; ../scripts/build-host.mjs copies it to ignored public/ before building. The Worker serves the original app at / and handles /api/marking and /api/marking/status server-side. The original subject apps and local storage remain unchanged.

Install dependencies here using the Sites helper; build through the parent app's build script. Do not edit generated dist/ or public/ and never put API secrets into either directory. Live rollout is pending secure OPENAI_API_KEY setup; see ../ai/README.md. Preserve platform authentication/connector adapters and existing owner-private Site identity. Root hosting migration and actual hosting publication are recorded separately in BUILD_STATUS.md.
