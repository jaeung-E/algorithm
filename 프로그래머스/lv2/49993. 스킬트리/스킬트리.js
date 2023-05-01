function solution(skill, skill_trees) {
    let answer = 0;
    const regex = new RegExp(`[^${skill}]`, 'g');

    skill_trees.forEach((skillTree) => {
        const str = skillTree.replace(regex, '');
        if (skill.startsWith(str) || str.length === 0) answer++;
    });
    
    return answer;
}