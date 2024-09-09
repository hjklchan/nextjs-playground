

export const categories: { id: number, parentId: number, name: string }[] = [
    // 一级分类
    { id: 1, parentId: 0, name: 'Frontend Development' },
    { id: 2, parentId: 0, name: 'Backend Development' },
    { id: 3, parentId: 0, name: 'DevOps' },
    { id: 4, parentId: 0, name: 'Mobile Development' },
    { id: 5, parentId: 0, name: 'Data Science' },
    { id: 6, parentId: 0, name: 'Machine Learning' },
    { id: 7, parentId: 0, name: 'UI/UX Design' },
    { id: 8, parentId: 0, name: 'Game Development' },
    { id: 9, parentId: 0, name: 'Cloud Computing' },
    { id: 10, parentId: 0, name: 'Cybersecurity' },

    // 二级分类
    { id: 11, parentId: 1, name: 'JavaScript Basics' },
    { id: 12, parentId: 1, name: 'Advanced TypeScript' },
    { id: 13, parentId: 1, name: 'React Hooks' },
    { id: 14, parentId: 1, name: 'Node.js Performance' },
    { id: 15, parentId: 1, name: 'CSS Grid' },
    { id: 16, parentId: 1, name: 'GraphQL' },
    { id: 17, parentId: 3, name: 'Docker' },
    { id: 18, parentId: 3, name: 'Kubernetes' },
    { id: 19, parentId: 1, name: 'SwiftUI' },
    { id: 20, parentId: 1, name: 'TensorFlow' },
    { id: 21, parentId: 5, name: 'Pandas' },
    { id: 22, parentId: 9, name: 'Neural Networks' },
    { id: 23, parentId: 8, name: 'Figma' },
    { id: 24, parentId: 8, name: 'Unity' },
    { id: 25, parentId: 9, name: 'AWS Lambda' },
    { id: 26, parentId: 2, name: 'Ethical Hacking' },
    { id: 27, parentId: 2, name: 'Rust Programming' },
    { id: 28, parentId: 1, name: 'WebAssembly' },
    { id: 29, parentId: 9, name: 'Microservices' },
    { id: 30, parentId: 9, name: 'Blockchain Basics' },
];
