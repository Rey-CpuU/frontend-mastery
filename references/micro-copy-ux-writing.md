# Micro-Copy & UX Writing Guide

> "Good design with bad copy is an unreadable interface. Words are UI elements."

---

## 1. The Cliché Blacklist & Replacements

AI models default to vague corporate filler copy. **The following phrases are strictly forbidden in production components:**

| Banned Generic Copy ❌ | Recommended High-Intent Copy ✅ | Context / Rationale |
| :--- | :--- | :--- |
| **"Get Started"** | *"Start building free"*, *"Claim your workspace"*, *"Open developer account"* | Specific action and reward. |
| **"Learn More"** | *"Read the architecture guide"*, *"Compare pricing tiers"*, *"View interactive demo"* | Tells user what they will actually find. |
| **"Submit"** | *"Send deployment request"*, *"Save payment details"*, *"Publish changelog"* | Replaces mechanical verb with domain purpose. |
| **"Explore our seamless solutions"**| *"Automate multi-region database failover"* | Concrete capability instead of corporate buzzwords. |
| **"Are you sure?"** (Modal) | *"Revoke API access for this team member?"* | States the exact irreversible consequence in title. |
| **"An error occurred."** | *"Failed to verify GitHub SSH key. Check repository permissions."* | Actionable diagnosis. |
| **"No items found."** | *"No open pull requests matching 'release/v2'. Clear filters to see all."* | Explains why it's empty and how to undo. |

---

## 2. The 3-Part Error Copy Architecture

Whenever rendering an error boundary, toast message, or inline input validation, follow this formula:

$$\text{Error Copy} = \text{What happened} + \text{Why it matters} + \text{Immediate action}$$

* ❌ **Bad:** `"Invalid input. Code 422."`
* ❌ **Bad:** `"Something went wrong on our end. Please try again later."`
* ✅ **Good:** `"Domain name contains invalid symbols. Remove 'https://' prefix and enter just the host (e.g. acme.dev)."`

---

## 3. Empty States that Convert

An empty state must never be a blank screen with a sad face. An empty state is **an onboarding opportunity**:

1. **Title:** State the positive baseline (*"No webhooks configured yet"*).
2. **Body:** 1–2 sentences explaining the benefit (*"Webhooks notify your external services whenever a deployment succeeds or fails."*).
3. **Primary CTA:** Exactly one high-contrast button to take the first action (*"Create first webhook"*).
4. **Secondary Link:** Documentation link for context (*"View webhook payload spec →"*).

---

## 4. Tone Adaptation Matrix

Adapt voice based on product domain:

| Domain | Tone | Sentence Style | Example |
| :--- | :--- | :--- | :--- |
| **DevTools / Infra** | Telemetry, precise, zero-fluff, factual | Imperative, short, technical terms welcomed | *"Branch merged. 14 preview environments pruned."* |
| **Fintech / Enterprise** | Authoritative, calm, reassuring, transparent | Complete sentences, explicit confirmations | *"Transfer of $14,250 initiated. Funds will settle via ACH by tomorrow, 5 PM EST."* |
| **Consumer / Creative** | Tactile, encouraging, conversational | Expressive, active voice | *"Drop your audio tracks here or pick from your cloud library."* |
