---
name: breakdown
description: >
  Break down large problems into smaller, manageable tasks.
  Use when starting complex features, planning architecture changes,
  tackling large refactors, or when the user asks to "break this down",
  "decompose this problem", "create a plan", or "split this into tasks".
argument-hint: [problem description or feature name]
version: 0.1.0
---

# Problem Breakdown Skill

This skill helps you systematically break down large problems into smaller, manageable tasks using a structured 5-phase approach.

## When to Use This Skill

- Starting complex feature development
- Planning architecture changes
- Tackling large refactoring efforts
- Analyzing and fixing complex bugs
- When explicitly asked to decompose or plan a problem

## The 5-Phase Breakdown Process

### Phase 1: Problem Understanding

**Goal**: Establish clear understanding of what needs to be accomplished.

1. **Extract the Goal**
   - Read the problem from user input or `$ARGUMENTS`
   - Identify the core objective in one sentence
   - Note any explicit constraints or requirements

2. **Classify the Problem Type**
   - **Feature Development**: Adding new functionality
   - **Bug Fix**: Resolving unexpected behavior
   - **Refactoring**: Improving code structure without changing behavior
   - **Architecture**: System design or major structural changes
   - **Planning**: Requirements analysis or design work

3. **Define Success Criteria**
   - What does "done" look like?
   - What are the acceptance criteria?
   - What is explicitly out of scope?

### Phase 2: Context Exploration

**Goal**: Understand the existing codebase and identify reusable patterns.

Use your tools to gather context:

```markdown
1. **Find Relevant Files**
   - Use Glob to locate related components
   - Example: `**/*auth*.ts` for authentication work

2. **Identify Existing Patterns**
   - Use Grep to find similar implementations
   - Example: search for existing API patterns, form handling, etc.

3. **Review Related Code**
   - Use Read to examine similar features
   - Note coding conventions and architectural patterns

4. **Check History**
   - Use `git log --grep` to find related changes
   - Review how similar features were implemented

5. **Map Dependencies**
   - Identify what components will be affected
   - Note integration points with existing systems
```

Document your findings:
- Existing patterns to follow
- Similar features to reference
- Dependencies and integration points
- Potential conflicts or challenges

### Phase 3: Decomposition Strategy Selection

**Goal**: Choose the right approach for breaking down the problem.

Select a strategy based on problem type (see [references/patterns.md](references/patterns.md) for details):

**For Feature Development:**
- User journey mapping → Component breakdown → Data flow → API design → Testing

**For Refactoring:**
- Current state analysis → Target state design → Migration path → Risk assessment

**For Bug Fixing:**
- Minimal reproduction → Root cause diagnosis → Fix implementation → Regression prevention

**For Architecture:**
- High-level design → Module boundaries → Interface contracts → Integration sequence

**Decision Criteria:**
- Does this preserve backwards compatibility?
- Can tasks be worked on in parallel?
- What's the rollback strategy if something goes wrong?
- What are the critical dependencies?

### Phase 4: Task Generation

**Goal**: Create actionable, well-sized tasks following INVEST principles.

Apply these rules:

1. **Size**: Each task should take 1-4 hours
   - Too large? Break it down further
   - Tiny tasks? Consider combining related work

2. **Independence**: Minimize dependencies where possible
   - Identify truly parallel work
   - Be explicit about sequential requirements

3. **Completeness**: Every task needs:
   - **Clear description**: What work is being done
   - **File references**: Where the work happens (with paths)
   - **Time estimate**: Rough hour range
   - **Dependencies**: What must be done first
   - **Definition of Done**: How to verify completion

4. **Structure**: Organize into logical phases
   - Group related tasks
   - Order by dependency flow
   - Identify critical path

5. **Metadata**: Enhance with useful information
   - Priority (High/Medium/Low)
   - Risk level
   - Complexity indicators

### Phase 5: Output and Integration

**Goal**: Present the breakdown clearly and offer to create tasks.

**Output Format:**

```markdown
# Breakdown: [Problem Name]

## Problem Summary
[1-2 sentences describing the goal]

## Exploration Findings
- **Existing patterns found**: [list relevant patterns]
- **Similar features**: [reference implementations]
- **Dependencies identified**: [components/systems affected]
- **Potential challenges**: [risks or blockers]

## Decomposition Strategy
Using [strategy name] approach because [reasoning]

## Task Breakdown

### Phase 1: [Phase Name]
**Goal**: [What this phase achieves]

- [ ] **Task 1.1**: [Action-oriented description]
  - **Files**: `path/to/file.ts:123`, `path/to/another.ts`
  - **Estimate**: 2-3 hours
  - **Priority**: High
  - **Depends on**: None
  - **Definition of Done**:
    - [ ] Specific verification criteria
    - [ ] Tests passing
    - [ ] Documentation updated

- [ ] **Task 1.2**: [Description]
  - **Files**: `path/to/component.tsx`
  - **Estimate**: 1-2 hours
  - **Priority**: High
  - **Depends on**: Task 1.1
  - **Definition of Done**:
    - [ ] Criteria here

### Phase 2: [Phase Name]
[Repeat structure]

## Dependencies Graph
```
Task 1.1 (no deps)
Task 1.2 → Task 1.1
Task 2.1 → Task 1.1, Task 1.2
Task 2.2 → Task 2.1
```

## Risks and Mitigation
- **Risk 1**: [Description] → **Mitigation**: [Strategy]
- **Risk 2**: [Description] → **Mitigation**: [Strategy]

## Implementation Roadmap
1. **Start with**: Tasks with no dependencies (parallel work)
2. **Then proceed**: Following dependency chain
3. **Critical path**: [Identify bottleneck tasks]
4. **Estimated total**: [Sum of sequential tasks]

## Critical Files
- `path/to/file1.ts` - [Why this file is critical]
- `path/to/file2.tsx` - [Why this file is critical]
```

**TaskCreate Integration (Optional):**

After presenting the breakdown, offer:

```markdown
---

## Task Creation

I've identified [N] tasks. Would you like me to create them in your task list?

If yes, I'll:
- Create each task with TaskCreate (subject, description, activeForm)
- Set up dependencies with TaskUpdate (blockedBy/blocks relationships)
- Organize them by phase and priority
```

If user approves, execute:
1. Call `TaskCreate` for each task with proper subject, description, and activeForm
2. Call `TaskUpdate` to establish dependency relationships
3. Confirm creation and show task IDs

## Quality Verification

Before finalizing, verify using the checklist in [references/verification.md](references/verification.md):

- ✓ All tasks sized 1-4 hours?
- ✓ Clear completion criteria for each task?
- ✓ Dependencies identified and no circular deps?
- ✓ Risks documented with mitigation strategies?
- ✓ File paths specified with line numbers where relevant?
- ✓ Rollback/recovery plan exists?

## Advanced Patterns

For problem-specific decomposition strategies, see:
- [references/patterns.md](references/patterns.md) - Detailed patterns for each problem type
- [references/verification.md](references/verification.md) - Quality assurance checklist

## Example Usage

**Invocation:**
```
/breakdown Add user profile editing with avatar upload
```

**Automatic trigger phrases:**
- "Break down this feature"
- "Decompose this problem"
- "Create a plan for X"
- "Split this into tasks"
- "How should I approach this?"

## Tips for Effective Breakdowns

1. **Start with exploration**: Don't guess - use Glob/Grep/Read to understand the codebase first
2. **Think dependencies**: What can be parallelized? What's sequential?
3. **Be specific**: Vague tasks like "update component" are less useful than "Add avatar upload to ProfileForm component with validation"
4. **Include verification**: Every task should have a clear way to verify it's done
5. **Consider rollback**: Especially for refactoring, think about how to undo changes if needed
6. **Reference files**: Always include file paths so tasks can be immediately actionable

## Notes

- Tasks are organized into phases for logical grouping
- Dependencies are explicitly tracked (blockedBy/blocks)
- Each task includes Definition of Done for clear completion criteria
- File paths use the pattern `file.ts:lineNumber` for easy navigation
- Estimates are ranges (1-2h, 2-3h) rather than precise numbers
- Integration with TaskCreate/TaskUpdate is optional and user-approved
