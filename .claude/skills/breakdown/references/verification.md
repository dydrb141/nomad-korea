# Breakdown Quality Verification

This checklist helps ensure your task breakdown is high-quality, actionable, and complete.

## Quick Verification Checklist

Run through this checklist before finalizing any breakdown:

- [ ] **Size**: All tasks are 1-4 hours
- [ ] **Clarity**: Each task has clear, action-oriented description
- [ ] **Files**: File paths specified for each task
- [ ] **Dependencies**: All dependencies identified, no circular deps
- [ ] **Completeness**: Each task has Definition of Done
- [ ] **Testability**: Clear verification criteria
- [ ] **Risks**: Major risks identified with mitigation
- [ ] **Rollback**: Recovery plan exists for risky changes

---

## Detailed Verification Criteria

### 1. INVEST Principles

Every task should follow INVEST criteria:

#### I - Independent
**Check:**
- [ ] Can this task be worked on without waiting for other tasks?
- [ ] If there are dependencies, are they explicitly stated?
- [ ] Are dependencies minimized?

**Red flags:**
- ❌ "Finish other tasks first"
- ❌ Circular dependencies (A needs B, B needs A)
- ❌ Too many dependencies (>3 blockers)

**Good examples:**
- ✅ "Task 2.1 depends on Task 1.3 (API endpoint must exist)"
- ✅ "Can be done in parallel with other Phase 1 tasks"

#### N - Negotiable
**Check:**
- [ ] Is there flexibility in how to implement this?
- [ ] Is the "what" clear but "how" has room for engineering decisions?

**Red flags:**
- ❌ Over-specified implementation details that constrain developers
- ❌ Requires specific library/approach without justification

**Good examples:**
- ✅ "Add validation to form fields (choose validation library)"
- ✅ "Implement caching (Redis or in-memory based on performance needs)"

#### V - Valuable
**Check:**
- [ ] Does this task contribute to the overall goal?
- [ ] Can you explain why this task matters?
- [ ] Would removing this task impact the end result?

**Red flags:**
- ❌ "Clean up code formatting"
- ❌ "Refactor for fun"
- ❌ Tasks that are nice-to-have but not required

**Good examples:**
- ✅ "Add form validation to prevent invalid data submission"
- ✅ "Implement error handling to improve user experience"

#### E - Estimable
**Check:**
- [ ] Is there enough information to estimate this task?
- [ ] Is the estimate realistic (1-4 hours)?
- [ ] If uncertain, has exploration been done?

**Red flags:**
- ❌ "Implement feature (unknown hours)"
- ❌ Tasks with >4 hour estimates (too large)
- ❌ Tasks with <30 min estimates (too granular)

**Good examples:**
- ✅ "Create AvatarUpload component (2-3 hours)"
- ✅ "Add API endpoint for profile update (1-2 hours)"

#### S - Small
**Check:**
- [ ] Can this task be completed in one sitting (1-4 hours)?
- [ ] Is the scope clear and limited?
- [ ] If >4 hours, can it be broken down further?

**Red flags:**
- ❌ "Build entire user profile feature" (too large)
- ❌ "Refactor authentication system" (too vague and large)

**Good examples:**
- ✅ "Add username field to ProfileForm component (1 hour)"
- ✅ "Implement file upload validation (1-2 hours)"

**How to break down large tasks:**
```
❌ "Implement user authentication (16 hours)"

✅ Break into:
  - Create login form UI (2h)
  - Add form validation (1-2h)
  - Implement login API endpoint (2-3h)
  - Add session management (2-3h)
  - Create protected route middleware (2h)
  - Add logout functionality (1h)
  - Write authentication tests (3-4h)
```

#### T - Testable
**Check:**
- [ ] Does the task have clear Definition of Done?
- [ ] Can you verify completion objectively?
- [ ] Are success criteria measurable?

**Red flags:**
- ❌ No Definition of Done
- ❌ Vague criteria: "Make it look good"
- ❌ Subjective criteria without acceptance tests

**Good examples:**
- ✅ Definition of Done:
  - [ ] Component renders without errors
  - [ ] Upload accepts PNG/JPEG files
  - [ ] Files >5MB are rejected with error message
  - [ ] Preview shows uploaded image
  - [ ] Unit tests pass

---

### 2. Task Size Validation

**Ideal task sizes:**
- **1 hour**: Simple, focused changes (add a field, fix a bug, write a test)
- **1-2 hours**: Small feature component, basic API endpoint
- **2-3 hours**: Complex component with state, API integration
- **3-4 hours**: Component with multiple interactions, complex logic

**If a task seems >4 hours, ask:**
1. Can I split UI from logic?
2. Can I separate API from frontend?
3. Can I separate implementation from testing?
4. Can I break this into multiple phases?

**Examples of proper sizing:**

```
❌ Too large (8 hours):
"Implement user profile editing with avatar upload"

✅ Properly sized:
- Create ProfileEditForm component structure (2h)
- Add form validation logic (1-2h)
- Implement avatar upload component (2-3h)
- Create profile update API endpoint (2h)
- Connect form to API (1-2h)
```

---

### 3. Dependency Management

**Check for:**
- [ ] All dependencies explicitly stated
- [ ] No circular dependencies
- [ ] Critical path identified
- [ ] Parallelizable tasks identified

**Dependency graph validation:**

```
✅ Valid dependency graph:
Task 1.1 (no deps) ─┐
Task 1.2 (no deps) ─┼─> Task 2.1 ─> Task 3.1
Task 1.3 (no deps) ─┘

❌ Circular dependency (invalid):
Task 1.1 ─> Task 2.1 ─> Task 3.1 ─> Task 1.1 ❌
```

**Critical path identification:**
- Identify the longest chain of sequential tasks
- This determines minimum project duration
- Focus on unblocking critical path tasks first

**Example:**
```
Parallel work (can do simultaneously):
- Task 1.1: Create UI components (3h)
- Task 1.2: Create API endpoints (3h)

Sequential work (must be done in order):
- Task 2.1: Connect UI to API (2h) [depends on 1.1, 1.2]
- Task 3.1: Add error handling (1h) [depends on 2.1]

Critical path: 6 hours minimum (assuming parallel work happens in parallel)
Total work: 9 hours (if done sequentially)
```

---

### 4. Definition of Done (DoD)

Every task must have clear, verifiable completion criteria.

**DoD should include:**
- [ ] Functional criteria (what should work)
- [ ] Test criteria (what tests should pass)
- [ ] Code quality criteria (types, linting, etc.)
- [ ] Documentation criteria (if applicable)

**Good DoD example:**
```markdown
### Task: Create AvatarUpload component

**Definition of Done:**
- [ ] Component renders in ProfileEditForm
- [ ] Accepts drag-and-drop file upload
- [ ] Accepts click-to-upload file selection
- [ ] Validates file type (JPEG, PNG only)
- [ ] Validates file size (max 5MB)
- [ ] Shows preview of uploaded image
- [ ] Displays error messages for invalid files
- [ ] Unit tests achieve >80% coverage
- [ ] Component is typed with TypeScript
- [ ] Passes ESLint with no warnings
```

**Bad DoD examples:**
- ❌ "Component works"
- ❌ "Looks good"
- ❌ "Code is clean"
- ❌ "Tests pass" (which tests?)

---

### 5. File Path Specificity

**Check:**
- [ ] File paths are absolute from project root
- [ ] Line numbers included where relevant
- [ ] New files clearly marked as "create new"
- [ ] Related files listed

**Good examples:**
- ✅ `src/components/profile/AvatarUpload.tsx` (create new)
- ✅ `src/components/profile/ProfileEditForm.tsx:45-67` (modify existing)
- ✅ `src/app/api/profile/avatar/route.ts` (create new)

**Bad examples:**
- ❌ "Update the profile component" (which one?)
- ❌ "avatar.tsx" (where is it?)
- ❌ "Some file in the API folder"

---

### 6. Risk Assessment

**For each breakdown, identify:**

#### High-Risk Areas
Tasks that could cause:
- Data loss
- Security vulnerabilities
- Breaking changes
- Performance degradation
- User-facing bugs

**For high-risk tasks, ensure:**
- [ ] Mitigation strategy documented
- [ ] Rollback plan exists
- [ ] Extra testing planned
- [ ] Monitoring/logging added
- [ ] Gradual rollout considered

**Example:**
```markdown
## Risks and Mitigation

### Risk 1: Avatar upload could expose server to malicious files
**Severity**: High
**Mitigation**:
- Validate file types server-side (not just client)
- Scan uploaded files for malware
- Limit file sizes strictly
- Store uploads in isolated storage with no execution permissions
- Add rate limiting to prevent abuse

### Risk 2: Large file uploads could degrade performance
**Severity**: Medium
**Mitigation**:
- Implement client-side image compression
- Set strict file size limits (5MB)
- Use async uploads with progress indicators
- Add CDN caching for avatars
```

---

### 7. Completeness Check

**Ensure the breakdown includes:**

- [ ] **Problem Summary**: Clear 1-2 sentence goal
- [ ] **Exploration Findings**: What patterns/code already exist
- [ ] **Strategy**: Why this decomposition approach was chosen
- [ ] **Task Breakdown**: All tasks with estimates, files, DoD
- [ ] **Dependencies**: Explicit dependency graph
- [ ] **Risks**: Major risks identified
- [ ] **Roadmap**: Implementation sequence
- [ ] **Critical Files**: List of key files that will change

**Missing any of these?** Go back and add them.

---

### 8. Common Anti-Patterns to Avoid

#### ❌ Waterfall Breakdown
```
Phase 1: Complete all design
Phase 2: Complete all implementation
Phase 3: Complete all testing
```
**Problem**: No value delivered until the end, can't validate approach early

**Better approach:** Vertical slices
```
Phase 1: Implement + test one key feature end-to-end
Phase 2: Implement + test second feature
Phase 3: Polish and integrate
```

#### ❌ Over-Engineering
```
- Create abstract factory for avatar upload
- Implement strategy pattern for image processing
- Build custom event bus for component communication
```
**Problem**: Unnecessary complexity for simple features

**Better approach:** YAGNI (You Aren't Gonna Need It)
```
- Create AvatarUpload component with simple upload logic
- Use existing image processing library
- Use standard React props for communication
```

#### ❌ Vague Tasks
```
- Fix the bug
- Update the component
- Improve performance
```
**Problem**: Unclear what needs to be done, hard to estimate

**Better approach:** Specific, actionable tasks
```
- Fix avatar not updating after upload (reproduce bug, add test, fix state update)
- Add email field to ProfileEditForm component with validation
- Optimize image loading by adding lazy loading and WebP format
```

#### ❌ Missing Context
```
- Create component (2h)
- Add API (3h)
- Connect them (1h)
```
**Problem**: No file paths, no DoD, no integration details

**Better approach:** Rich context
```
- Create AvatarUpload component (2-3h)
  - Files: `src/components/profile/AvatarUpload.tsx`
  - DoD: Component renders, handles file upload, shows preview
  - Related: Will be used in ProfileEditForm

- Add avatar upload API endpoint (2-3h)
  - Files: `src/app/api/profile/avatar/route.ts`
  - DoD: Accepts multipart/form-data, returns S3 URL, validates file type
  - Related: Will be called by AvatarUpload component
```

---

## Validation Workflow

Use this workflow to verify your breakdown:

### Step 1: Quick Scan (2 minutes)
- Count tasks: Are there too many (>20) or too few (<3)?
- Check estimates: Are most tasks 1-4 hours?
- Spot check: Do tasks have file paths and DoD?

### Step 2: INVEST Check (5 minutes)
- Review 3-5 random tasks
- Apply INVEST criteria
- If any fail, review all tasks

### Step 3: Dependency Validation (3 minutes)
- Draw dependency graph
- Check for circular dependencies
- Identify critical path

### Step 4: Completeness Check (2 minutes)
- Verify all sections present (summary, findings, strategy, tasks, risks, roadmap)
- Ensure risks are documented
- Confirm implementation sequence makes sense

### Step 5: Practical Test (1 minute)
Ask yourself:
- Could another developer pick up any task and start immediately?
- Would you be comfortable estimating timeline based on this breakdown?
- Does the breakdown give you confidence in the approach?

If yes to all: ✅ Ready to proceed
If no to any: 🔄 Revise the breakdown

---

## Example: Complete Verification

**Breakdown:** "Add user profile editing with avatar upload"

### ✅ Passes Verification

**Size check:**
- 8 tasks total, ranging from 1-3 hours each ✓

**INVEST check:**
- All tasks are independent or have clear dependencies ✓
- Implementation details are negotiable ✓
- Each task delivers value ✓
- All tasks are estimable (1-3h ranges) ✓
- All tasks are small enough (none >4h) ✓
- All tasks have clear DoD ✓

**Dependency check:**
```
Phase 1 (parallel):
- Task 1.1: Create ProfileEditForm (3h)
- Task 1.2: Create AvatarUpload component (2-3h)
- Task 1.3: Create API endpoint (2-3h)

Phase 2 (sequential):
- Task 2.1: Integrate AvatarUpload into ProfileEditForm (1-2h) [needs 1.1, 1.2]
- Task 2.2: Connect form to API (1-2h) [needs 1.3, 2.1]

Phase 3:
- Task 3.1: Add validation (1-2h) [needs 2.2]
- Task 3.2: Add error handling (1h) [needs 2.2]
- Task 3.3: Write tests (2-3h) [needs all above]
```
No circular dependencies ✓
Critical path identified ✓

**DoD check:**
Every task has:
- Functional criteria ✓
- Test criteria ✓
- File paths ✓

**Risk check:**
- File upload security risks identified ✓
- Mitigation strategies documented ✓
- Performance risks considered ✓

**Completeness check:**
- Problem summary ✓
- Exploration findings ✓
- Strategy explanation ✓
- Full task breakdown ✓
- Dependency graph ✓
- Risks and mitigation ✓
- Implementation roadmap ✓
- Critical files listed ✓

**Result:** ✅ High-quality breakdown, ready to implement

---

## When to Revise

**Revise if:**
- Any task is >4 hours (break it down further)
- Circular dependencies exist (redesign dependencies)
- Tasks lack DoD (add completion criteria)
- File paths are missing (add specific paths)
- Dependencies are unclear (map them explicitly)
- Risks aren't addressed (identify and mitigate)
- Implementation sequence doesn't make sense (reorder)

**Don't revise if:**
- Estimates are ranges (1-2h is fine, doesn't need to be exact)
- Some tasks seem easy (not everything is complex)
- Different approaches are possible (negotiability is good)

---

## Final Quality Gates

Before marking a breakdown as complete:

### Gate 1: Developer Handoff Test
**Question:** Could you hand this breakdown to another developer and they could start immediately without asking questions?

- ✅ Yes → Proceed
- ❌ No → Add missing context

### Gate 2: Estimation Confidence
**Question:** Can you give a realistic timeline based on this breakdown?

- ✅ Yes → Proceed
- ❌ No → Improve estimates or break down further

### Gate 3: Risk Comfort Level
**Question:** Are you confident you've identified and planned for major risks?

- ✅ Yes → Proceed
- ❌ No → Do deeper risk assessment

### Gate 4: Value Verification
**Question:** Does completing these tasks achieve the stated goal?

- ✅ Yes → Ready to implement
- ❌ No → Missing tasks or wrong strategy

---

## Continuous Improvement

After completing a breakdown and implementing it:

**Retrospective questions:**
- Were estimates accurate?
- Did we miss any dependencies?
- Were there unexpected risks?
- Was the decomposition strategy right?

**Use answers to:**
- Refine future breakdowns
- Update patterns.md with lessons learned
- Improve estimation accuracy
- Enhance risk identification

---

## Summary Checklist

Before finalizing, confirm:

- [ ] All tasks are 1-4 hours (INVEST: Small)
- [ ] Each task can be worked on independently or deps are clear (INVEST: Independent)
- [ ] Implementation details are flexible (INVEST: Negotiable)
- [ ] Each task delivers value (INVEST: Valuable)
- [ ] Estimates are realistic (INVEST: Estimable)
- [ ] Clear Definition of Done for each task (INVEST: Testable)
- [ ] File paths specified
- [ ] No circular dependencies
- [ ] Critical path identified
- [ ] Risks documented with mitigation
- [ ] Rollback plan exists for risky changes
- [ ] Complete sections (summary, findings, tasks, risks, roadmap)

**If all checked:** ✅ High-quality breakdown, ready to proceed
**If any unchecked:** 🔄 Review and improve before finalizing
