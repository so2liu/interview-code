export class Graph {
    edgeNum: number = 0;
    private _adj: number[][] = [];
    get adj() {
        return this._adj;
    }
    isDag = false;

    constructor(isDag: boolean = false) {
        this.isDag = isDag;
    }

    addEdge(v: number, w: number) {
        if (!this._adj[v]) {
            this._adj[v] = [];
        }
        if (!this._adj[w]) {
            this._adj[w] = [];
        }
        this._adj[v].push(w);
        if (this.isDag) this._adj[w].push(v);

        this.edgeNum++;
    }

    dfs(v: number, cb?: (i: number) => void) {
        const marked: boolean[] = new Array(this.adj.length).fill(false);

        const helper = (v: number, cb?: (i: number) => void) => {
            marked[v] = true;
            cb && cb(v);

            this.adj[v].forEach((w) => {
                if (!marked[w]) {
                    helper(w, cb);
                }
            });
        };

        helper(v, cb);
    }

    bfs(v: number, cb?: (cur: number, prev?: number) => void) {
        const marked: boolean[] = new Array(this.adj.length).fill(false);
        const queue: number[] = [];
        marked[v] = true;
        cb && cb(v, undefined);
        queue.push(v);

        while (queue.length > 0) {
            const v = queue.shift()!;
            this.adj[v].forEach((w) => {
                if (!marked[w]) {
                    marked[w] = true;
                    cb && cb(w, v);
                    queue.push(w);
                }
            });
        }
    }

    bfsSearch(from: number, to: number) {
        const backwardPath: Record<number, number> = {};
        // backwardPath记录下bfs的路径的映射，to => from，下面倒退回去就可以了

        this.bfs(from, (cur, prev) => {
            if (prev !== undefined) {
                backwardPath[cur] = prev;
            }
        });

        const path: number[] = [to];

        let node = to;
        while (!path.includes(from)) {
            path.unshift(backwardPath[node]);
            node = backwardPath[node];
        }
        return path;
    }

    topoSort() {
        const stack: number[] = [];
        const visited: boolean[] = new Array(this.adj.length).fill(false);

        const helper = (v: number, visited: boolean[], stack: number[]) => {
            visited[v] = true;

            // 走到最深
            this.adj[v].forEach((w) => {
                if (!visited[w]) {
                    helper(w, visited, stack);
                }
            });

            // 把最深的push到结果里
            stack.push(v);
        };

        this.adj.forEach((a, i) => {
            if (visited[i] === false) {
                helper(i, visited, stack);
            }
        });

        return stack;
    }
}
