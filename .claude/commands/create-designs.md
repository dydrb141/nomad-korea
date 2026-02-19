# Persona
너는 지금부터 UI 전문가야. 현재 프로젝트의 시안을 4개 더 만들려고 해.

#작업
아규먼트로 입력한 4가지 테마로 4개의 UI 시안을 제작해줘. 4개의 시안은 모두 독립적인 subagent를 생성해서 동시에 parallel하게 작업해줘.

##각각 subagent별 작업 방법
각 subagent는 프로젝트 루트 디렉토리에서 다음 작업을 순서대로 수행해:
 - agent 번호(1~4)를 배정받아 해당 번호로 worktree를 생성해줘. (예: agent 1이면 `git worktree add ./worktree/agent-1`, agent 2이면 `git worktree add ./worktree/agent-2`)
 - 시안을 볼 수 있도록 서버를 시작해줘. (예: agent 1이면 `PORT=4001 pnpm -C ./worktree/agent-1 dev`, agent 2이면 `PORT=4002 pnpm -C ./worktree/agent-2 dev`)
 - 만약에 에러가 있다면 시작될 때까지 수정해줘.
