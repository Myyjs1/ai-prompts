// 分类数据
const categoriesData = {
    "categories": [
        {
            "id": "programming",
            "name": "编程开发",
            "icon": "💻",
            "description": "编程相关的AI提示词"
        },
        {
            "id": "writing",
            "name": "文章写作",
            "icon": "✍️",
            "description": "写作相关的AI提示词"
        },
        {
            "id": "art",
            "name": "AI绘画",
            "icon": "🎨",
            "description": "绘画相关的AI提示词"
        },
        {
            "id": "video",
            "name": "AI视频",
            "icon": "🎥",
            "description": "视频生成与编辑相关的AI提示词"
        },
        {
            "id": "audio",
            "name": "AI音频",
            "icon": "🎵",
            "description": "音频生成与处理相关的AI提示词"
        },
        {
            "id": "translation",
            "name": "AI翻译",
            "icon": "🌐",
            "description": "多语言翻译相关的AI提示词"
        },
        {
            "id": "business",
            "name": "商业应用",
            "icon": "💼",
            "description": "商业相关的AI提示词"
        },
        {
            "id": "education",
            "name": "教育学习",
            "icon": "📚",
            "description": "教育相关的AI提示词"
        },
        {
            "id": "research",
            "name": "学术研究",
            "icon": "🔬",
            "description": "学术研究相关的AI提示词"
        },
        {
            "id": "3d",
            "name": "3D建模",
            "icon": "🎮",
            "description": "3D模型生成相关的AI提示词"
        },
        {
            "id": "analysis",
            "name": "数据分析",
            "icon": "📊",
            "description": "数据分析相关的AI提示词"
        },
        {
            "id": "assistant",
            "name": "生活助手",
            "icon": "🤖",
            "description": "日常生活相关的AI提示词"
        }
    ]
};

// 提示词数据
const promptsData = {
    "programming": [
        {
            "id": "prog_001",
            "title": "代码优化建议",
            "content": "你是一位拥有15年经验的高级软件架构师，专注于系统性能优化和架构设计。请分析以下代码并提供优化建议，包括性能、可读性、可维护性和最佳实践方面的改进。请从架构师的角度详细解释每个建议的原因和预期效果。",
            "tags": ["优化", "重构", "性能"],
            "usage": "将你的代码粘贴到此提示词后面",
            "example": "代码：\nfunction calculate(a, b) {\n    return a + b;\n}\n\nAI回复：作为架构师，我建议从以下几个方面优化：\n1. 接口设计：添加TypeScript类型定义，提高代码健壮性\n2. 错误处理：实现完整的错误处理机制\n3. 性能优化：添加缓存机制\n4. 可测试性：添加单元测试用例",
            "author": {
                "username": "admin",
                "avatar": "",
                "github": "yourusername"
            }
        },
        {
            "id": "prog_002",
            "title": "系统架构设计",
            "content": "你是一位专注于分布式系统的首席架构师，具有丰富的大规模系统设计经验。请根据以下业务需求，设计一个可扩展、高可用、高性能的系统架构方案。请详细说明系统的各个组件、技术选型、数据流转过程以及可能的性能瓶颈和解决方案。",
            "tags": ["架构设计", "分布式", "高可用"],
            "usage": "描述你的业务需求和系统规模",
            "example": "需求：设计一个支持百万用户的实时聊天系统\n\nAI回复：\n1. 系统架构：\n   - 接入层：Nginx负载均衡\n   - 消息服务：RabbitMQ集群\n   - 存储层：分片MongoDB集群\n2. 技术选型理由...\n3. 扩展性考虑...",
            "author": {
                "username": "admin",
                "avatar": "",
                "github": "yourusername"
            }
        },
        {
            "id": "prog_003",
            "title": "代码安全审查",
            "content": "你是一位网络安全专家，具有CISSP认证和多年的安全漏洞分析经验。请对以下代码进行安全审查，识别潜在的安全漏洞，并提供详细的修复建议。特别注意常见的安全问题如SQL注入、XSS攻击、CSRF等。",
            "tags": ["安全", "审查", "漏洞修复"],
            "usage": "提供需要审查的代码片段",
            "example": "代码：\napp.get('/user', (req, res) => {\n  const query = 'SELECT * FROM users WHERE id = ' + req.query.id;\n})\n\nAI回复：\n1. SQL注入风险：使用参数化查询\n2. 缺少输入验证\n3. 建议添加访问控制..."
        }
    ],
    "writing": [
        {
            "id": "writing_001",
            "title": "SEO文章优化",
            "content": "你是一位拥有10年SEO优化经验的内容策略专家，精通搜索引擎算法和用户行为分析。请帮我优化以下文章，使其更符合搜索引擎收录标准，同时保持对用户的吸引力。请从SEO专家的角度提供详细的优化建议。",
            "tags": ["SEO", "内容优化", "用户体验"],
            "usage": "将需要优化的文章粘贴到此处",
            "example": "文章：[您的文章内容]\n\nAI回复：\n1. 标题优化：加入核心关键词，提高点击率\n2. 内容结构：使用H1-H6标签合理布局\n3. 关键词密度：建议在3-5%之间\n4. 内部链接优化..."
        },
        {
            "id": "writing_002",
            "title": "品牌故事创作",
            "content": "你是一位资深品牌营销顾问，曾服务过多个世界500强企业的品牌建设。请基于以下品牌信息，创作一个引人入胜的品牌故事，突出品牌价值观和独特卖点，同时与目标受众建立情感连接。",
            "tags": ["品牌营销", "故事创作", "情感营销"],
            "usage": "提供品牌基本信息和目标受众特征",
            "example": "品牌：环保科技公司\n目标：年轻环保主义者\n\nAI回复：\n[故事开头]在一个被污染困扰的城市...\n[冲突]传统技术的局限性...\n[解决方案]我们的创新技术...\n[情感共鸣]为下一代创造更好的未来..."
        }
    ],
    "art": [
        {
            "id": "art_001",
            "title": "场景描述生成",
            "content": "请生成一个详细的场景描述，包括主题、风格、光照、构图、色彩等要素。描述应该既有创意又便于AI理解和执行。",
            "tags": ["场景描述", "创意", "细节"],
            "usage": "描述你想要的场景主题",
            "example": "主题：一个未来城市的黄昏\n风格：赛博朋克\n光照：暖色调，逆光\n构图：广角视角\n色彩：霓虹色彩与暖色调的对比"
        },
        {
            "id": "art_002",
            "title": "风格转换提示",
            "content": "请将以下图片描述转换成[特定艺术风格]的版本。保持主要元素不变，但添加该风格的特征性表现手法。",
            "tags": ["风格转换", "艺术风格", "创意"],
            "usage": "1. 输入原始图片描述\n2. 指定目标艺术风格",
            "example": "原始描述：一个女孩在花园里读书\n目标风格：梵高印象派\n\n转换结果：充满漩涡状笔触的花园场景，强烈的黄色和蓝色对比，厚重的颜料层次感..."
        }
    ],
    "video": [
        {
            "id": "video_001",
            "title": "短视频脚本策划",
            "content": "你是一位在抖音、快手等平台拥有百万粉丝的短视频创作者，精通内容策划和用户心理。请根据以下主题，设计一个能在前3秒抓住用户注意力，并保持高观看完成率的短视频脚本。",
            "tags": ["短视频", "内容策划", "脚本创作"],
            "usage": "提供视频主题和目标受众",
            "example": "主题：科技产品开箱\n时长：60秒\n\nAI回复：\n[开场3秒]特写镜头+悬念设置\n[内容节奏]15秒产品亮点\n[高潮设计]30秒意外反转\n[结尾设计]情感共鸣+互动引导"
        },
        {
            "id": "video_002",
            "title": "后期剪辑指导",
            "content": "你是一位专业的视频后期制作导演，精通Premiere、After Effects等专业软件。请根据以下素材特点和目标风格，提供详细的后期剪辑方案，包括转场效果、调色风格、音乐配乐等。",
            "tags": ["视频剪辑", "后期制作", "视觉效果"],
            "usage": "描述素材特点和目标风格",
            "example": "素材：产品宣传片素材\n风格：科技感\n\nAI回复：\n1. 调色方案：高对比度冷色调\n2. 转场效果：数字故障风格\n3. 音效设计：科技感音效\n4. 字幕动画：未来科技风"
        }
    ],
    "audio": [
        {
            "id": "audio_001",
            "title": "播客脚本创作",
            "content": "你是一位拥有丰富播客制作经验的音频内容制作人，精通叙事结构和听众心理。请根据以下主题，创作一期能够吸引并保持听众注意力的播客脚本，包括开场白、内容结构、互动环节和结束语。",
            "tags": ["播客", "脚本", "音频内容"],
            "usage": "提供播客主题和目标听众群",
            "example": "主题：科技创新对生活的影响\n时长：30分钟\n\nAI回复：\n[开场]引人入胜的真实故事\n[内容]三个核心观点展开\n[互动]设置悬念和问题\n[结尾]情感升华+下期预告"
        }
    ],
    "translation": [
        {
            "id": "trans_001",
            "title": "多语言本地化",
            "content": "请将以下内容翻译成目标语言，同时考虑文化背景差异，确保翻译既准确又地道。请提供详细的翻译建议和文化考虑因素。",
            "tags": ["翻译", "本地化", "文化适应"],
            "usage": "输入原文和目标语言",
            "example": "原文：欢迎使用我们的服务\n目标语言：英语、日语\n\nAI回复：\n英语：Welcome to our service\n日语：私たちのサービスへようこそ\n\n文化考虑：\n1. 英语版本保持简洁直接\n2. 日语版本添加敬语元素..."
        }
    ],
    "research": [
        {
            "id": "research_001",
            "title": "研究方法设计",
            "content": "请帮助设计一个完整的研究方法，包括研究问题、假设、数据收集方法、分析方法等。请考虑研究的可行性和潜在限制。",
            "tags": ["研究设计", "方法论", "学术"],
            "usage": "描述你的研究主题和目标",
            "example": "主题：社交媒体对青少年学习的影响\n\nAI回复：\n研究问题：\n1. 社交媒体使用时长与学习成绩的关系\n2. 不同类型社交媒体的影响差异\n\n研究方法：\n1. 问卷调查\n2. 对照实验..."
        }
    ],
    "3d": [
        {
            "id": "3d_001",
            "title": "场景建模提示",
            "content": "你是一位经验丰富的3D环境艺术总监，曾参与多个3A级游戏的场景制作。请根据以下场景描述，提供详细的建模指导，包括空间布局、材质选择、光影效果和氛围营造。",
            "tags": ["3D建模", "场景设计", "环境艺术"],
            "usage": "描述目标场景和风格需求",
            "example": "场景：废弃的未来城市\n风格：赛博朋克\n\nAI回复：\n1. 建筑结构：垂直城市设计\n2. 材质细节：金属+霓虹效果\n3. 光照方案：体积光+点光源\n4. 氛围营造：雾气+反光效果"
        }
    ],
    "analysis": [
        {
            "id": "analysis_001",
            "title": "数据分析计划",
            "content": "请根据以下数据集和分析目标，制定一个完整的数据分析计划，包括数据预处理、分析方法、可视化方案等。",
            "tags": ["数据分析", "可视化", "统计"],
            "usage": "描述你的数据集和分析目标",
            "example": "数据：电商销售数据\n目标：找出销售趋势和影响因素\n\nAI回复：\n分析步骤：\n1. 数据清洗和标准化\n2. 时间序列分析\n3. 相关性分析\n可视化：\n1. 销售趋势折线图\n2. 热力图展示相关性..."
        }
    ],
    "assistant": [
        {
            "id": "assistant_001",
            "title": "日程规划助手",
            "content": "请根据以下活动和时间安排，制定一个优化的日程计划，包括时间分配、优先级排序和提醒建议。",
            "tags": ["时间管理", "规划", "效率"],
            "usage": "列出需要安排的活动和可用时间",
            "example": "活动清单：\n1. 工作会议 2小时\n2. 健身 1小时\n3. 学习 2小时\n\nAI回复：\n建议日程：\n09:00-11:00 工作会议\n12:30-13:30 健身\n20:00-22:00 学习\n\n优化建议：\n1. 会议前预留准备时间\n2. 健身安排在午休时间..."
        }
    ]
};

// 全局状态
let categories = [];
let currentCategory = 'all';
let prompts = [];
let currentTag = ''; // 添加当前选中的标签状态

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    categories = categoriesData.categories;
    renderCategories();
    initializeEventListeners();
    loadPrompts('all');
    initWelcomeBanner();
});

// 初始化欢迎横幅
function initWelcomeBanner() {
    const banner = document.getElementById('welcomeBanner');
    const closeBtn = document.getElementById('closeBanner');
    const layoutContainer = document.querySelector('.layout-container');
    
    // 检查是否已经关闭过横幅
    const isBannerClosed = localStorage.getItem('welcomeBannerClosed');
    
    if (!isBannerClosed) {
        layoutContainer.classList.add('banner-visible');
    } else {
        banner.classList.add('hidden');
    }
    
    closeBtn.addEventListener('click', () => {
        banner.classList.add('hidden');
        layoutContainer.classList.remove('banner-visible');
        localStorage.setItem('welcomeBannerClosed', 'true');
    });
}

// 加载提示词数据
function loadPrompts(categoryId) {
    // 获取收藏和使用次数数据
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const usageCounts = JSON.parse(localStorage.getItem('usageCounts') || '{}');

    if (categoryId === 'favorites') {
        // 加载收藏的提示词
        prompts = Object.entries(promptsData).reduce((acc, [category, categoryPrompts]) => {
            return acc.concat(categoryPrompts
                .filter(prompt => favorites[prompt.id])
                .map(prompt => ({
                    ...prompt,
                    category
                })));
        }, []);
    } else if (categoryId === 'all') {
        // 如果是"全部"分类，加载所有分类的提示词
        prompts = Object.entries(promptsData).reduce((acc, [category, categoryPrompts]) => {
            return acc.concat(categoryPrompts.map(prompt => ({
                ...prompt,
                category
            })));
        }, []);
    } else {
        // 加载特定分类的提示词
        prompts = promptsData[categoryId]?.map(prompt => ({
            ...prompt,
            category: categoryId
        })) || [];
    }

    // 排序逻辑：先按收藏状态排序，未收藏的按使用次数排序
    prompts.sort((a, b) => {
        // 首先按收藏状态排序
        const aFavorite = favorites[a.id] || false;
        const bFavorite = favorites[b.id] || false;
        
        if (aFavorite && !bFavorite) return -1;
        if (!aFavorite && bFavorite) return 1;
        
        // 如果收藏状态相同，按使用次数排序
        const aUsageCount = usageCounts[a.id] || 0;
        const bUsageCount = usageCounts[b.id] || 0;
        
        return bUsageCount - aUsageCount; // 降序排列
    });

    renderPrompts();
}

// 渲染分类列表
function renderCategories() {
    const container = document.querySelector('.category-list');
    const categoriesHtml = categories.map(category => `
        <div class="category-item" data-category="${category.id}">
            <span class="category-icon">${category.icon}</span>
            <span class="category-name">${category.name}</span>
        </div>
    `).join('');
    
    // 保持"全部"分类在最上方
    container.innerHTML = `
        <div class="category-item active" data-category="all">
            <span class="category-icon">🏠</span>
            <span class="category-name">全部提示词</span>
        </div>
        ${categoriesHtml}
    `;
}

// 初始化事件监听器
function initializeEventListeners() {
    // 分类点击事件
    document.querySelector('.category-list').addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.category-item');
        if (categoryItem) {
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            categoryItem.classList.add('active');
            
            const categoryId = categoryItem.dataset.category;
            currentCategory = categoryId;
            
            // 更新分类信息
            const category = categories.find(c => c.id === categoryId) || {
                name: '全部提示词',
                description: '浏览所有可用的AI提示词'
            };
            
            document.querySelector('.category-title').textContent = category.name;
            document.querySelector('.category-description').textContent = 
                category.description || `浏览${category.name}相关的AI提示词`;
            
            loadPrompts(categoryId);
        }
    });

    // 搜索输入事件
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', debounce(() => {
        renderPrompts();
    }, 300));

    // 移动端菜单按钮事件
    const menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('show');
    });
    document.querySelector('.main-nav').prepend(menuBtn);

    // 添加主题切换按钮
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = '🌓';
    themeBtn.title = '切换主题';
    themeBtn.addEventListener('click', toggleTheme);
    document.querySelector('.main-nav').appendChild(themeBtn);

    // 初始化主题
    initTheme();

    // 添加提交提示词按钮事件
    document.getElementById('submitPromptBtn').addEventListener('click', () => {
        const issueTitle = encodeURIComponent('提交新提示词');
        const issueTemplate = encodeURIComponent(`
### 提示词标题
[在这里填写提示词标题]

### 提示词内容
[在这里填写提示词内容]

### 使用说明
[在这里填写如何使用这个提示词]

### 回复示例
[在这里提供一个回复示例]

### 标签
[添加相关标签，用逗号分隔]

### 分类
[选择一个分类：编程开发/文章写作/AI绘画/商业应用/教育学习]
        `);
        
        window.open(`https://github.com/Myyjs1/ai-prompts/issues/new?title=${issueTitle}&body=${issueTemplate}`, '_blank');
    });
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// 切换主题
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// 添加收藏分类
function addFavoritesCategory() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const favoritesCount = Object.values(favorites).filter(Boolean).length;
    
    // 在"全部"分类后添加"收藏"分类
    const allCategory = document.querySelector('.category-item[data-category="all"]');
    const favoritesCategory = document.createElement('div');
    favoritesCategory.className = 'category-item';
    favoritesCategory.setAttribute('data-category', 'favorites');
    favoritesCategory.innerHTML = `
        <span class="category-icon">⭐</span>
        <span class="category-name">我的收藏</span>
        <span class="category-count">${favoritesCount}</span>
    `;
    allCategory.after(favoritesCategory);
}

// 渲染提示词卡片
function renderPrompts() {
    const container = document.getElementById('promptsContainer');
    const searchQuery = document.getElementById('search').value.toLowerCase();
    
    // 过滤提示词
    let filteredPrompts = prompts;
    if (Array.isArray(prompts)) {
        filteredPrompts = prompts.filter(prompt => {
            const matchesSearch = 
                prompt.title.toLowerCase().includes(searchQuery) || 
                prompt.content.toLowerCase().includes(searchQuery) ||
                (prompt.tags && prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery)));
            return matchesSearch;
        });
    }

    // 从localStorage获取收藏数据
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    const usageCounts = JSON.parse(localStorage.getItem('usageCounts') || '{}');

    // GitHub图标SVG
    const githubIconSvg = `<svg class="github-icon" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>`;

    // 渲染HTML
    container.innerHTML = filteredPrompts.map(prompt => `
        <div class="prompt-card">
            <div class="prompt-header">
                <h3>${prompt.title}</h3>
                <button class="favorite-btn ${favorites[prompt.id] ? 'active' : ''}" data-id="${prompt.id}">
                    ${favorites[prompt.id] ? '★' : '☆'}
                </button>
            </div>
            <div class="prompt-content-section">
                <h4>提示词内容：</h4>
                <p class="prompt-content">${prompt.content}</p>
            </div>
            ${prompt.usage ? `
                <div class="prompt-usage-section">
                    <h4>使用说明：</h4>
                    <p class="prompt-usage">${prompt.usage}</p>
                </div>
            ` : ''}
            ${prompt.example ? `
                <div class="prompt-example-section">
                    <h4>回复示例：</h4>
                    <pre class="prompt-example">${prompt.example}</pre>
                </div>
            ` : ''}
            ${prompt.tags ? `
                <div class="prompt-tags">
                    ${prompt.tags.map(tag => `
                        <span class="prompt-tag ${tag === currentTag ? 'active' : ''}" 
                              data-tag="${tag}">${tag}</span>
                    `).join('')}
                </div>
            ` : ''}
            <div class="prompt-footer">
                <button class="edit-btn" data-id="${prompt.id}">
                    编辑提示词
                </button>
                <button class="copy-btn" data-prompt="${encodeURIComponent(prompt.content)}">
                    复制提示词
                </button>
                <span class="usage-count">使用次数: ${usageCounts[prompt.id] || 0}</span>
            </div>
            ${prompt.author ? `
                <div class="prompt-author">
                    <div class="prompt-author-avatar">
                        ${prompt.author.avatar ? 
                            `<img src="${prompt.author.avatar}" alt="${prompt.author.username}" />` :
                            githubIconSvg
                        }
                    </div>
                    <div class="prompt-author-info">
                        <span class="prompt-author-username">${prompt.author.username}</span>
                        ${prompt.author.github ? `
                            <a href="https://github.com/${prompt.author.github}" 
                               class="prompt-author-github" 
                               target="_blank" 
                               title="访问 GitHub 主页">
                                ${githubIconSvg}
                            </a>
                        ` : ''}
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');

    // 添加事件监听器
    addPromptCardEventListeners();
}

// 添加提示词卡片的事件监听器
function addPromptCardEventListeners() {
    // 复制按钮事件监听器
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const promptText = decodeURIComponent(button.dataset.prompt);
            copyToClipboard(promptText);
            
            // 更新使用次数
            const promptCard = button.closest('.prompt-card');
            const promptId = promptCard.querySelector('.favorite-btn').dataset.id;
            incrementUsageCount(promptId);
        });
    });

    // 收藏按钮事件监听器
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', () => {
            const promptId = button.dataset.id;
            toggleFavorite(promptId);
            button.textContent = button.classList.contains('active') ? '☆' : '★';
            button.classList.toggle('active');
        });
    });

    // 标签点击事件监听器
    document.querySelectorAll('.prompt-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const tagText = tag.dataset.tag;
            // 如果点击的是当前选中的标签，则取消选中
            if (currentTag === tagText) {
                currentTag = '';
                document.getElementById('search').value = '';
            } else {
                currentTag = tagText;
                document.getElementById('search').value = tagText;
            }
            renderPrompts();
        });
    });

    // 编辑按钮事件监听器
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', () => {
            const promptId = button.dataset.id;
            openEditor(promptId);
        });
    });
}

// 打开编辑器
function openEditor(promptId) {
    const prompt = findPromptById(promptId);
    if (!prompt) return;

    const editor = document.getElementById('editorPanel');
    const mainContent = document.querySelector('main');
    const promptEditor = document.getElementById('promptEditor');
    const variableList = document.getElementById('variableList');
    const previewContent = editor.querySelector('.preview-content');

    // 设置编辑器内容
    promptEditor.value = prompt.content;

    // 查找可能的变量 {variable_name}
    const variables = [...new Set(prompt.content.match(/\{([^}]+)\}/g) || [])];
    
    // 渲染变量输入框
    variableList.innerHTML = variables.map(variable => `
        <div class="variable-item">
            <input type="text" 
                   placeholder="${variable.replace(/[{}]/g, '')}"
                   data-variable="${variable}"
                   class="variable-input">
        </div>
    `).join('');

    // 显示编辑器
    editor.classList.add('show');
    mainContent.classList.add('editor-open');

    // 添加事件监听器
    const closeBtn = editor.querySelector('.close-editor');
    const previewBtn = editor.querySelector('.preview-btn');
    const copyBtn = editor.querySelector('.editor-actions .copy-btn');

    closeBtn.onclick = () => {
        editor.classList.remove('show');
        mainContent.classList.remove('editor-open');
    };

    previewBtn.onclick = () => {
        updatePreview();
    };

    copyBtn.onclick = () => {
        copyToClipboard(previewContent.textContent || promptEditor.value);
        incrementUsageCount(promptId);
    };

    // 变量输入事件
    variableList.querySelectorAll('.variable-input').forEach(input => {
        input.addEventListener('input', () => {
            updatePreview();
        });
    });

    // 更新预览
    function updatePreview() {
        let previewText = promptEditor.value;
        variableList.querySelectorAll('.variable-input').forEach(input => {
            const value = input.value.trim();
            if (value) {
                previewText = previewText.replace(input.dataset.variable, value);
            }
        });
        previewContent.textContent = previewText;
    }
}

// 根据ID查找提示词
function findPromptById(promptId) {
    for (const [category, categoryPrompts] of Object.entries(promptsData)) {
        const prompt = categoryPrompts.find(p => p.id === promptId);
        if (prompt) return prompt;
    }
    return null;
}

// 更新使用次数
function incrementUsageCount(promptId) {
    const usageCounts = JSON.parse(localStorage.getItem('usageCounts') || '{}');
    usageCounts[promptId] = (usageCounts[promptId] || 0) + 1;
    localStorage.setItem('usageCounts', JSON.stringify(usageCounts));
    
    // 更新显示
    const countElement = document.querySelector(`[data-id="${promptId}"]`)
        .closest('.prompt-card')
        .querySelector('.usage-count');
    countElement.textContent = `使用次数: ${usageCounts[promptId]}`;
}

// 切换收藏状态
function toggleFavorite(promptId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    favorites[promptId] = !favorites[promptId];
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 复制到剪贴板
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('已复制到剪贴板');
    }).catch(err => {
        console.error('复制失败:', err);
        showToast('复制失败，请重试');
    });
}

// 显示提示toast
function showToast(message) {
    const toast = document.getElementById('copyToast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
} 