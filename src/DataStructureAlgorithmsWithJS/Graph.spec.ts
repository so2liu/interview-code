import { Graph } from "./Graph";

describe("Graph", () => {
    let g: Graph;
    beforeEach(() => {
        g = new Graph();
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(0, 3);
        g.addEdge(1, 3);
        g.addEdge(2, 4);
    });

    it("should add edge", () => {
        expect(g.edgeNum).toBe(5);
        expect(g.adj.length).toBe(5);
    });

    it("should get all vertices in right dfs order", () => {
        const vertices: number[] = [];
        g.dfs(0, (i: number) => vertices.push(i));
        expect(vertices).toEqual([0, 1, 3, 2, 4]);
    });

    it("should get allsvertices in bfs order", () => {
        const vertices: number[] = [];
        g.bfs(0, (i) => typeof i === "number" && vertices.push(i));
        expect(vertices).toEqual([0, 1, 2, 3, 4]);
    });

    it("should get path", () => {
        const result = g.bfsSearch(0, 4);
        expect(result).toEqual([0, 2, 4]);
    });

    it("should get topo sorted stack", () => {
        const g = new Graph(true);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(3, 4);
        g.addEdge(3, 5);

        const r = g.topoSort();
        console.log(r);
        expect(r).toEqual([]);
    });
});
