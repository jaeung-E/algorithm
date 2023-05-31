import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Stack;

public class Main {
	public static void main(String[] args) throws IOException{
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	String[] line = br.readLine().split(" ");
    	int nodes = Integer.parseInt(line[0]);
    	int edges = Integer.parseInt(line[1]);
    	int start = Integer.parseInt(line[2]);
    	
    	Graph graph = new Graph(nodes);
    	
    	for(int i = 0; i < edges; i++) {
    		line = br.readLine().split(" ");
    		int x = Integer.parseInt(line[0]);
    		int y = Integer.parseInt(line[1]);
    		graph.put(x, y);
    	}
    	
    	graph.sort();
    	
    	System.out.println(graph.dfs(start));
    	
    	graph.clearVisited();
    	
    	System.out.println(graph.bfs(start));
    }
}

class Graph{
	private int initSize;
	private LinkedList<LinkedList<Integer>> graph;
	private Stack<Integer> stack;
	private LinkedList<Integer> queue;
	private boolean[] visited;
	
	public Graph(int initSize) {
		this.initSize = initSize + 1;
		this.graph = new LinkedList<>();
		this.stack = new Stack<>();
		this.queue = new LinkedList<>();
		this.visited = new boolean[this.initSize];
		
		for(int i = 0; i < this.initSize; i++) {
			visited[i] = false;
			graph.add(new LinkedList<>());
		}
	}
	
	public void put(int x, int y) {
		this.graph.get(x).add(y);
		this.graph.get(y).add(x);
	}
	
	public void sort() {
		for(int i = 1; i < initSize; i++)
			Collections.sort(graph.get(i));
	}
	
	public String dfs(int vertex) {
		visited[vertex] = true;
		stack.push(vertex);
		StringBuffer sb = new StringBuffer();
		sb.append(vertex + " ");
		while(!stack.isEmpty()) {
			boolean flag = false;
			int node = stack.peek();
			
			LinkedList<Integer> list = graph.get(node);
			for(int v : list) {
				if(visited[v] == false) {
					visited[v] = true;
					stack.push(v);
					sb.append(v + " ");
					flag = true;
					break;
				}
			}
			
			if(!flag)
				stack.pop();
		}
		return sb.toString().trim();
	}
	
	public String bfs(int vertex) {
		visited[vertex] = true;
		queue.offer(vertex);
		StringBuffer sb = new StringBuffer();
		
		while(!queue.isEmpty()) {
			int node = queue.poll();
			sb.append(node + " ");
			LinkedList<Integer> list = graph.get(node);
			
			for(int i = 0; i < list.size(); i++) {
				if(visited[list.get(i)] == false) {
					visited[list.get(i)] = true;
					queue.offer(list.get(i));
				}
			}
		}
		
		return sb.toString().trim();
	}
	
	public void clearVisited() {
		for(int i = 0; i < initSize; i++) {
			visited[i] = false;
		}
	}
}