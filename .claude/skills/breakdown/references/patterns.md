# Decomposition Patterns

This document provides detailed decomposition strategies for different types of problems.

## Pattern Selection Guide

| Problem Type | Pattern | Best For | Avoid When |
|-------------|---------|----------|------------|
| Feature Development | User Journey Pattern | Adding new user-facing functionality | Internal refactoring |
| Refactoring | Strangler Fig Pattern | Changing implementation without changing behavior | Adding new features |
| Bug Fixing | Root Cause Pattern | Resolving unexpected behavior | Feature requests |
| Architecture | Module Boundary Pattern | System design, major structural changes | Small localized changes |

---

## 1. Feature Development Pattern

**When to Use:**
- Adding new user-facing functionality
- Building new components or pages
- Extending existing features with new capabilities
- Implementing new user workflows

**Approach: User Journey → Components → Data Flow → Integration**

### Step 1: Map User Journey
Break down the feature from the user's perspective.

**Questions to answer:**
- What does the user want to accomplish?
- What screens/pages will they interact with?
- What actions will they take?
- What feedback will they receive?

**Output:** User story with clear steps
```
As a user, I want to [goal] so that [benefit]

Journey:
1. User navigates to [location]
2. User sees [interface elements]
3. User performs [action]
4. System responds with [feedback]
5. User completes [outcome]
```

### Step 2: Component Hierarchy
Identify UI components needed for each step.

**Tasks to create:**
- [ ] Design component structure (parent/child relationships)
- [ ] Create component files and basic structure
- [ ] Add props interfaces/types
- [ ] Implement component logic
- [ ] Add styling
- [ ] Create stories/documentation

**Example breakdown:**
```
ProfileEditPage (container)
├── ProfileEditForm (smart component)
│   ├── AvatarUpload (feature component)
│   │   ├── ImagePreview (presentational)
│   │   └── UploadButton (presentational)
│   ├── ProfileFields (feature component)
│   └── SaveButton (presentational)
└── SuccessNotification (feature component)
```

### Step 3: Data Flow
Map how data moves through the system.

**Tasks to create:**
- [ ] Define data models/types
- [ ] Create API endpoints/contracts
- [ ] Implement state management
- [ ] Add data fetching logic
- [ ] Handle loading/error states
- [ ] Add data validation

**Pattern:**
```
User Input → Form State → Validation → API Call → Server Processing →
Response → State Update → UI Update → User Feedback
```

### Step 4: API and Backend
Implement server-side logic.

**Tasks to create:**
- [ ] Design API endpoint structure
- [ ] Implement request handlers
- [ ] Add database operations
- [ ] Implement business logic
- [ ] Add authentication/authorization
- [ ] Create API documentation

### Step 5: Testing
Ensure quality at each layer.

**Tasks to create:**
- [ ] Unit tests for components
- [ ] Integration tests for data flow
- [ ] API tests
- [ ] E2E tests for user journey
- [ ] Accessibility tests
- [ ] Performance tests (if needed)

### Step 6: Integration and Polish
Bring everything together.

**Tasks to create:**
- [ ] Connect components to data layer
- [ ] Add error handling
- [ ] Implement loading states
- [ ] Add success/error notifications
- [ ] Polish UI/UX
- [ ] Add analytics/monitoring

### Example: Avatar Upload Feature

```markdown
## Task Breakdown

### Phase 1: Component Structure (4-6 hours)
- [ ] Create AvatarUpload component with drag-and-drop zone (2-3h)
  - Files: `src/components/profile/AvatarUpload.tsx`
  - DoD: Component renders, accepts image files, shows preview

- [ ] Add ImagePreview with cropping UI (2-3h)
  - Files: `src/components/profile/ImagePreview.tsx`
  - DoD: Preview shows image, crop controls work

### Phase 2: Upload Logic (5-7 hours)
- [ ] Implement file validation (image types, size limits) (1-2h)
  - Files: `src/utils/imageValidation.ts`
  - DoD: Validates JPEG/PNG, max 5MB, correct dimensions

- [ ] Create upload API endpoint (2-3h)
  - Files: `src/app/api/profile/avatar/route.ts`
  - DoD: Accepts multipart/form-data, returns upload URL

- [ ] Add S3/storage integration (2-3h)
  - Files: `src/lib/storage.ts`
  - DoD: Uploads to storage, returns public URL

### Phase 3: Integration (3-4 hours)
- [ ] Connect AvatarUpload to ProfileEditForm (1-2h)
  - Files: `src/components/profile/ProfileEditForm.tsx`
  - DoD: Upload triggers on form submit

- [ ] Update user profile with avatar URL (1-2h)
  - Files: `src/app/actions/updateProfile.ts`
  - DoD: Avatar URL saved to database, reflected in UI

### Phase 4: Testing (4-5 hours)
- [ ] Unit tests for validation logic (1h)
- [ ] Component tests for AvatarUpload (1-2h)
- [ ] API integration tests (1-2h)
- [ ] E2E test for full upload flow (1h)
```

---

## 2. Refactoring Pattern

**When to Use:**
- Changing implementation without changing behavior
- Improving code structure or performance
- Migrating to new libraries or patterns
- Removing technical debt

**Approach: Strangler Fig Migration**

The Strangler Fig pattern gradually replaces old code with new code, allowing safe incremental migration.

### Step 1: Current State Analysis
Understand what exists today.

**Tasks to create:**
- [ ] Document current implementation
- [ ] Identify all usage locations (use Grep extensively)
- [ ] Map dependencies (what depends on this code?)
- [ ] List known issues with current approach
- [ ] Establish baseline metrics (performance, bundle size, etc.)

**Output:** Current state document
```markdown
## Current State
- **Implementation**: [describe current approach]
- **File locations**: [list all files]
- **Used by**: [list all consumers]
- **Dependencies**: [list what it depends on]
- **Issues**: [list problems]
- **Metrics**: [performance, size, etc.]
```

### Step 2: Target State Design
Define the end goal.

**Tasks to create:**
- [ ] Design new implementation approach
- [ ] Choose libraries/patterns to use
- [ ] Define new interfaces/contracts
- [ ] Plan for backwards compatibility
- [ ] Identify breaking changes (if any)

**Output:** Target state document with clear contracts

### Step 3: Migration Path
Plan the transition strategy.

**Key principle:** Both old and new code coexist during migration.

**Tasks to create:**
- [ ] Create new implementation alongside old (don't delete yet!)
- [ ] Add adapter/facade layer if needed
- [ ] Implement feature flag or toggle
- [ ] Migrate one consumer at a time
- [ ] Validate each migration step
- [ ] Remove old code only when all consumers migrated

**Migration strategy options:**
1. **Parallel Run**: Run both implementations, compare results
2. **Feature Flag**: Toggle between old/new per request
3. **Gradual Rollout**: Migrate consumers one by one
4. **Branch by Abstraction**: Use interface to switch implementations

### Step 4: Risk Assessment
Identify and mitigate risks.

**Tasks to create:**
- [ ] Identify high-risk areas
- [ ] Create rollback plan
- [ ] Add monitoring/logging
- [ ] Plan for data migration (if applicable)
- [ ] Test edge cases

**Risk categories:**
- **Data loss**: Can we recover?
- **Performance regression**: Can we measure?
- **Breaking changes**: Who will be affected?
- **Incomplete migration**: What happens if we stop halfway?

### Step 5: Incremental Migration
Execute the migration in small steps.

**Tasks to create (for each consumer):**
- [ ] Update consumer to use new implementation
- [ ] Run tests to verify behavior unchanged
- [ ] Deploy to staging
- [ ] Monitor for issues
- [ ] Deploy to production
- [ ] Verify in production

### Step 6: Cleanup
Remove old code once migration is complete.

**Tasks to create:**
- [ ] Remove feature flags
- [ ] Delete old implementation
- [ ] Remove adapter layers
- [ ] Update documentation
- [ ] Clean up related code

### Example: Session to JWT Migration

```markdown
## Task Breakdown

### Phase 1: Current State Analysis (2-3 hours)
- [ ] Document current session-based auth (1h)
  - Files: `src/lib/auth/session.ts`
  - DoD: Documented how sessions work, where stored, lifecycle

- [ ] Find all session usage (1-2h)
  - Use: `Grep "getSession|setSession|clearSession"`
  - DoD: Complete list of all consumers

### Phase 2: JWT Implementation (6-8 hours)
- [ ] Create JWT utility functions (2-3h)
  - Files: `src/lib/auth/jwt.ts`
  - DoD: sign(), verify(), refresh() functions working

- [ ] Add JWT middleware (2-3h)
  - Files: `src/middleware.ts`
  - DoD: Validates JWT, attaches user to request

- [ ] Create migration adapter (2h)
  - Files: `src/lib/auth/adapter.ts`
  - DoD: Can read both session and JWT

### Phase 3: Gradual Migration (8-10 hours)
- [ ] Migrate login endpoint (2h)
  - Files: `src/app/api/auth/login/route.ts`
  - DoD: Returns JWT, still creates session for backwards compat

- [ ] Migrate protected API routes one by one (4-6h)
  - Use adapter to accept both session and JWT
  - DoD: Each route works with both auth methods

- [ ] Update frontend to use JWT (2-3h)
  - Files: `src/lib/api/client.ts`
  - DoD: Includes JWT in Authorization header

### Phase 4: Validation (3-4 hours)
- [ ] Test suite for JWT auth (2h)
- [ ] Production monitoring setup (1-2h)
  - DoD: Can track JWT vs session usage

### Phase 5: Cleanup (2-3 hours)
- [ ] Remove session code (1-2h)
  - Only after 100% JWT usage
- [ ] Remove adapter (1h)
- [ ] Update documentation (30min)
```

---

## 3. Bug Fixing Pattern

**When to Use:**
- Resolving unexpected behavior
- Fixing crashes or errors
- Addressing performance issues
- Correcting logic bugs

**Approach: Reproduce → Diagnose → Fix → Prevent**

### Step 1: Minimal Reproduction
Create the smallest test case that shows the bug.

**Tasks to create:**
- [ ] Reproduce bug locally
- [ ] Write failing test that demonstrates bug
- [ ] Identify exact conditions required
- [ ] Document steps to reproduce

**Output:** Reproduction script or test
```typescript
// Bug: User avatar not updating after upload
test('avatar should update after successful upload', () => {
  // 1. Log in as user
  // 2. Upload new avatar
  // 3. Expect profile to show new avatar
  // ACTUAL: Shows old avatar until page refresh
});
```

### Step 2: Root Cause Analysis
Understand why the bug occurs.

**Investigation tasks:**
- [ ] Add logging to trace execution
- [ ] Use debugger to step through code
- [ ] Check related git history (`git log --grep`, `git blame`)
- [ ] Review error logs/stack traces
- [ ] Identify which component/function is faulty

**Common bug patterns:**
- **State Management**: Stale state, race conditions
- **Async Issues**: Missing await, unhandled promises
- **Data Handling**: Null/undefined, type mismatches
- **Logic Errors**: Off-by-one, incorrect conditionals
- **Side Effects**: Unexpected mutations, caching issues

### Step 3: Fix Implementation
Correct the root cause.

**Tasks to create:**
- [ ] Implement fix in minimal way
- [ ] Ensure fix doesn't break other functionality
- [ ] Update any related code
- [ ] Add or update tests

**Principles:**
- Fix the cause, not the symptom
- Prefer simple fixes over complex refactors
- Consider backwards compatibility
- Don't over-engineer the solution

### Step 4: Regression Prevention
Ensure the bug doesn't come back.

**Tasks to create:**
- [ ] Add regression test
- [ ] Add related test cases (edge cases)
- [ ] Update documentation if behavior was unclear
- [ ] Add type safety if bug was type-related
- [ ] Add validation if bug was data-related

### Step 5: Verification
Confirm the fix works.

**Tasks to create:**
- [ ] Run full test suite
- [ ] Manual testing in dev environment
- [ ] Staging deployment and testing
- [ ] Monitoring in production

### Example: Avatar Not Updating Bug

```markdown
## Task Breakdown

### Phase 1: Reproduction (1 hour)
- [ ] Create failing test for avatar update (1h)
  - Files: `src/components/profile/__tests__/ProfileEditForm.test.tsx`
  - DoD: Test reliably fails, demonstrates bug

### Phase 2: Diagnosis (1-2 hours)
- [ ] Trace avatar upload flow (1h)
  - Add console.logs to track data flow
  - DoD: Identified that state updates but UI doesn't re-render

- [ ] Review ProfileEditForm re-render logic (30min-1h)
  - Files: `src/components/profile/ProfileEditForm.tsx`
  - DoD: Found that avatar state is local, not synced with global user state

### Phase 3: Fix (2-3 hours)
- [ ] Update global user state after avatar upload (1-2h)
  - Files: `src/app/actions/updateProfile.ts`
  - DoD: Server action updates both DB and global state

- [ ] Ensure ProfileEditForm uses global user state (1h)
  - Files: `src/components/profile/ProfileEditForm.tsx`
  - DoD: Component reflects user state changes

### Phase 4: Regression Prevention (1-2 hours)
- [ ] Add integration test for avatar update flow (1-2h)
  - DoD: Test verifies UI updates immediately after upload

### Phase 5: Verification (30min)
- [ ] Run full test suite (15min)
- [ ] Manual testing (15min)
```

---

## 4. Architecture Pattern

**When to Use:**
- System design or major structural changes
- Establishing new patterns or conventions
- Scaling the application
- Improving maintainability

**Approach: Design → Define Boundaries → Establish Contracts → Integrate**

### Step 1: High-Level Design
Define the architecture vision.

**Tasks to create:**
- [ ] Document architectural goals
- [ ] Choose architectural patterns (MVC, layered, microservices, etc.)
- [ ] Identify major components/modules
- [ ] Define communication patterns
- [ ] Consider scalability and performance

**Output:** Architecture diagram and principles document

### Step 2: Module Boundaries
Define clear separation of concerns.

**Tasks to create:**
- [ ] Define module responsibilities (single responsibility principle)
- [ ] Establish folder structure
- [ ] Define what each module owns
- [ ] Identify shared vs. module-specific code
- [ ] Plan for dependency direction (avoid circular deps)

**Module organization example:**
```
src/
├── features/          # Feature modules
│   ├── auth/
│   ├── profile/
│   └── cities/
├── shared/           # Shared utilities
│   ├── ui/           # Shared UI components
│   ├── api/          # API client
│   └── utils/        # Pure utilities
└── lib/              # Third-party integrations
```

### Step 3: Interface Contracts
Define how modules communicate.

**Tasks to create:**
- [ ] Define public APIs for each module
- [ ] Create TypeScript interfaces/types
- [ ] Document expected behavior
- [ ] Establish error handling contracts
- [ ] Define data models

**Contract example:**
```typescript
// Feature module public API
export interface AuthModule {
  login(credentials: Credentials): Promise<User>;
  logout(): Promise<void>;
  getCurrentUser(): User | null;

  // Internal implementation details are hidden
}
```

### Step 4: Implementation Sequence
Plan the order of implementation.

**Strategy:**
1. **Bottom-up**: Build foundational pieces first
2. **Top-down**: Start with high-level structure, stub dependencies
3. **Vertical slice**: Implement one complete feature end-to-end first

**Tasks to create:**
- [ ] Set up folder structure
- [ ] Create interface definitions
- [ ] Implement core modules
- [ ] Implement dependent modules
- [ ] Add integration layer
- [ ] Migrate existing code (if applicable)

### Step 5: Migration Strategy
Transition from old architecture (if applicable).

**Tasks to create:**
- [ ] Identify what needs to move
- [ ] Create module structure in parallel with old code
- [ ] Move code incrementally
- [ ] Update imports/dependencies
- [ ] Remove old structure

### Step 6: Documentation and Governance
Ensure the architecture is maintained.

**Tasks to create:**
- [ ] Write architecture decision records (ADRs)
- [ ] Create developer guide
- [ ] Add linting rules to enforce patterns
- [ ] Set up code review guidelines
- [ ] Create examples/templates

### Example: Feature-Based Architecture

```markdown
## Task Breakdown

### Phase 1: Architecture Design (3-4 hours)
- [ ] Document feature module architecture (1-2h)
  - DoD: Clear diagram showing feature modules, shared code, libs

- [ ] Define module boundaries and responsibilities (1-2h)
  - DoD: Each feature owns its UI, API, state, types

### Phase 2: Folder Structure (2-3 hours)
- [ ] Create feature module folders (1h)
  - Files: `src/features/{auth,profile,cities}/`
  - DoD: Folders created with index.ts exports

- [ ] Set up shared folders (1h)
  - Files: `src/shared/{ui,api,utils}/`

- [ ] Configure path aliases (1h)
  - Files: `tsconfig.json`
  - DoD: Can import with `@features/`, `@shared/`

### Phase 3: Define Contracts (4-5 hours)
- [ ] Create auth module interface (1h)
  - Files: `src/features/auth/types.ts`

- [ ] Create profile module interface (1h)
  - Files: `src/features/profile/types.ts`

- [ ] Create cities module interface (1h)
  - Files: `src/features/cities/types.ts`

- [ ] Define shared types (1-2h)
  - Files: `src/shared/types/`

### Phase 4: Incremental Migration (12-16 hours)
- [ ] Migrate auth components to feature module (3-4h)
  - Move files, update imports

- [ ] Migrate profile components (3-4h)
- [ ] Migrate cities components (3-4h)
- [ ] Migrate shared UI components (3-4h)

### Phase 5: Cleanup and Enforcement (2-3 hours)
- [ ] Add ESLint rules for import paths (1h)
  - Prevent importing from feature internals

- [ ] Update documentation (1h)
  - Files: `ARCHITECTURE.md`

- [ ] Remove old folder structure (1h)
```

---

## Pattern Combination

Real-world problems often require combining patterns:

**Example: Adding a new feature to an existing poorly-structured codebase**
1. Start with **Architecture Pattern** to improve structure
2. Use **Refactoring Pattern** to clean up existing code
3. Apply **Feature Development Pattern** to add new functionality

**Example: Fixing a bug that reveals architectural issues**
1. Use **Bug Fixing Pattern** for immediate fix
2. Use **Refactoring Pattern** to improve underlying structure
3. Use **Architecture Pattern** if systemic changes needed

## General Tips

1. **Start small**: Break down to 1-4 hour tasks
2. **Be explicit**: Include file paths, line numbers where possible
3. **Think dependencies**: What can be done in parallel?
4. **Plan for failure**: What's the rollback strategy?
5. **Verify at each step**: Don't accumulate unverified work
6. **Document decisions**: Future you will thank present you
