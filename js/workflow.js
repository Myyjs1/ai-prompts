/* js/workflow.js */

// Local storage key for workflows
const LOCAL_WORKFLOW_KEY = 'local_workflows';

// 预设的工作流数据
const defaultWorkflowsData = {
    "workflows": [
        {
            "id": "workflow_novel_writing",
            "title": "小说创作工作流",
            "category": "writing",
            "description": "通过多个步骤引导完成一部小说的创作，从构思到成稿",
            "tags": ["写作", "小说", "创意"],
            "steps": [
                {
                    "title": "故事构思",
                    "prompt": "作为一位拥有20年创作经验的资深小说家，我专注于故事结构设计和人物塑造。请基于这个身份，帮我构思以下要素：\n1. 故事的核心主题和中心思想\n2. 故事发生的背景设定（时间、地点、世界观）\n3. 3-5个主要人物的性格特点和关系\n4. 主要矛盾和冲突\n5. 故事的开端、高潮和结局走向",
                    "instruction": "提供尽可能详细的构思要素，为后续写作打好基础"
                },
                {
                    "title": "大纲设计",
                    "prompt": "基于上述构思，请帮我设计一个详细的故事大纲，包括：\n1. 序章内容\n2. 每一章节的主要情节\n3. 重要场景的设定\n4. 人物出场和发展节奏\n5. 伏笔和悬念的安排",
                    "instruction": "大纲要层次分明，注意情节的起承转合"
                },
                {
                    "title": "章节扩写",
                    "prompt": "请根据大纲帮我扩写每个章节，要求：\n1. 场景描写要细致生动\n2. 人物对话要自然传神\n3. 情节发展要合理流畅\n4. 注意人物情感变化\n5. 保持文风的一致性",
                    "instruction": "可以分章节逐步扩写，每次处理一个章节"
                },
                {
                    "title": "修改完善",
                    "prompt": "请帮我检查和完善以下内容：\n1. 文字表达是否准确流畅\n2. 情节是否存在漏洞\n3. 人物性格是否前后一致\n4. 伏笔是否都得到回应\n5. 提供修改建议和优化方案",
                    "instruction": "注重细节打磨，提升作品整体质量"
                }
            ],
            "createdAt": "2024-02-10T08:00:00.000Z"
        },
        {
            "id": "workflow_code_review",
            "title": "代码审查工作流",
            "category": "programming",
            "description": "系统性地审查代码，确保代码质量和最佳实践",
            "tags": ["编程", "代码审查", "优化"],
            "steps": [
                {
                    "title": "代码规范检查",
                    "prompt": "请检查以下代码的规范性，包括：\n1. 命名规范（变量、函数、类）\n2. 代码格式（缩进、空格、换行）\n3. 注释完整性和规范性\n4. 是否符合项目编码规范\n5. 文件组织结构",
                    "instruction": "将代码粘贴到此处，会得到详细的规范性分析"
                },
                {
                    "title": "性能分析",
                    "prompt": "请分析以下代码的性能问题：\n1. 算法复杂度分析\n2. 资源使用效率\n3. 潜在的性能瓶颈\n4. 内存使用情况\n5. 提供优化建议",
                    "instruction": "重点关注代码的执行效率和资源占用"
                },
                {
                    "title": "安全性检查",
                    "prompt": "请检查以下代码的安全性问题：\n1. 输入验证和清理\n2. 权限控制\n3. 敏感数据处理\n4. 常见安全漏洞\n5. 错误处理机制",
                    "instruction": "确保代码没有安全隐患"
                },
                {
                    "title": "可维护性分析",
                    "prompt": "请分析代码的可维护性：\n1. 代码结构和模块化\n2. 复用性和扩展性\n3. 依赖管理\n4. 测试覆盖率\n5. 文档完整性",
                    "instruction": "提供改进建议，提升代码的长期可维护性"
                }
            ],
            "createdAt": "2024-02-10T09:00:00.000Z"
        },
        {
            "id": "workflow_art_creation",
            "title": "AI绘画创作工作流",
            "category": "art",
            "description": "通过多个步骤完成一幅完整的AI绘画作品",
            "tags": ["AI绘画", "艺术创作", "设计"],
            "steps": [
                {
                    "title": "概念构思",
                    "prompt": "请帮我构思一幅画的创作要素：\n1. 主题和创作意图\n2. 画面主要元素\n3. 构图方式\n4. 色彩计划\n5. 风格定位",
                    "instruction": "提供清晰的创作方向和视觉规划"
                },
                {
                    "title": "提示词优化",
                    "prompt": "基于上述构思，请生成优化的提示词：\n1. 主体描述\n2. 风格关键词\n3. 构图关键词\n4. 光影氛围词\n5. 质量控制词",
                    "instruction": "生成适用于AI绘画的详细提示词"
                },
                {
                    "title": "变体探索",
                    "prompt": "请基于初始结果，提供以下变化方向：\n1. 构图调整\n2. 色彩变化\n3. 风格转换\n4. 细节增强\n5. 元素添加/删减",
                    "instruction": "探索不同的创作可能性"
                },
                {
                    "title": "后期优化",
                    "prompt": "请提供以下后期处理建议：\n1. 局部调整\n2. 色彩平衡\n3. 细节修饰\n4. 特效添加\n5. 整体协调",
                    "instruction": "完善作品的最终呈现效果"
                }
            ],
            "createdAt": "2024-02-10T10:00:00.000Z"
        },
        {
            "id": "workflow_business_plan",
            "title": "商业计划书工作流",
            "category": "business",
            "description": "逐步完成一份专业的商业计划书",
            "tags": ["商业", "创业", "计划"],
            "steps": [
                {
                    "title": "项目概述",
                    "prompt": "请帮我完成商业计划书的项目概述部分：\n1. 项目背景\n2. 产品/服务描述\n3. 市场机会\n4. 商业模式\n5. 核心优势",
                    "instruction": "简明扼要地介绍项目的核心要素"
                },
                {
                    "title": "市场分析",
                    "prompt": "请进行详细的市场分析：\n1. 目标市场规模\n2. 客户群体分析\n3. 竞争对手分析\n4. 行业趋势\n5. SWOT分析",
                    "instruction": "提供数据支持的市场洞察"
                },
                {
                    "title": "运营策略",
                    "prompt": "请制定具体的运营策略：\n1. 营销策略\n2. 销售计划\n3. 运营流程\n4. 团队构成\n5. 风险控制",
                    "instruction": "详细说明业务开展的具体方案"
                },
                {
                    "title": "财务预测",
                    "prompt": "请提供财务分析和预测：\n1. 启动资金需求\n2. 收入预测\n3. 成本结构\n4. 盈利模型\n5. 现金流预测",
                    "instruction": "使用实际数据进行财务规划"
                }
            ],
            "createdAt": "2024-02-10T11:00:00.000Z"
        },
        {
            "id": "workflow_course_design",
            "title": "课程设计工作流",
            "category": "education",
            "description": "系统化设计一个完整的课程",
            "tags": ["教育", "课程设计", "教学"],
            "steps": [
                {
                    "title": "需求分析",
                    "prompt": "请帮我分析课程设计的基本要素：\n1. 目标学员特征\n2. 学习目标\n3. 先修知识要求\n4. 预期学习成果\n5. 课程难度定位",
                    "instruction": "明确课程的目标和受众"
                },
                {
                    "title": "内容规划",
                    "prompt": "请规划课程内容结构：\n1. 知识点梳理\n2. 课程大纲\n3. 教学重难点\n4. 课时分配\n5. 教学资源准备",
                    "instruction": "系统化组织教学内容"
                },
                {
                    "title": "教学设计",
                    "prompt": "请设计具体的教学方案：\n1. 教学方法\n2. 课堂活动\n3. 案例设计\n4. 作业设计\n5. 互动环节",
                    "instruction": "设计生动有效的教学活动"
                },
                {
                    "title": "评估方案",
                    "prompt": "请制定课程评估方案：\n1. 考核方式\n2. 评分标准\n3. 反馈机制\n4. 效果评估\n5. 持续改进计划",
                    "instruction": "确保学习效果可测量和改进"
                }
            ],
            "createdAt": "2024-02-10T12:00:00.000Z"
        },
        {
            "id": "workflow_research_paper",
            "title": "学术论文写作工作流",
            "category": "research",
            "description": "系统性地完成一篇学术论文的写作过程",
            "tags": ["学术", "论文", "研究"],
            "steps": [
                {
                    "title": "文献综述",
                    "prompt": "作为一位在顶尖期刊发表过数十篇论文的资深研究员，我精通学术写作和研究方法。请基于这个身份，帮我完成文献综述的以下部分：\n1. 研究领域的发展历史\n2. 主要理论框架梳理\n3. 研究方法评述\n4. 现有研究成果总结\n5. 研究空白和机会分析",
                    "instruction": "系统梳理相关研究文献，找出研究空白"
                },
                {
                    "title": "研究设计",
                    "prompt": "请帮我设计研究方案：\n1. 研究问题和假设\n2. 研究方法选择\n3. 数据收集计划\n4. 分析框架设计\n5. 预期研究成果",
                    "instruction": "制定详细的研究计划和方法"
                },
                {
                    "title": "数据分析",
                    "prompt": "请协助进行数据分析：\n1. 数据预处理方法\n2. 统计分析方案\n3. 可视化建议\n4. 结果解释思路\n5. 稳健性检验方案",
                    "instruction": "系统分析数据并解释结果"
                },
                {
                    "title": "论文写作",
                    "prompt": "请帮我完善论文写作：\n1. 摘要和关键词\n2. 引言和研究背景\n3. 理论基础和假设\n4. 研究方法和结果\n5. 讨论和结论",
                    "instruction": "按学术规范完成论文写作"
                }
            ],
            "createdAt": "2024-02-10T13:00:00.000Z"
        },
        {
            "id": "workflow_video_production",
            "title": "视频内容制作工作流",
            "category": "media",
            "description": "完整的视频内容策划和制作流程",
            "tags": ["视频", "内容创作", "媒体"],
            "steps": [
                {
                    "title": "内容策划",
                    "prompt": "作为一位拥有8年视频制作经验的内容总监，我曾制作过多个百万级播放量的视频作品。请基于这个身份，帮我策划视频内容：\n1. 目标受众分析\n2. 核心主题确定\n3. 内容框架设计\n4. 创意亮点构思\n5. 传播策略规划",
                    "instruction": "明确视频定位和传播策略"
                },
                {
                    "title": "脚本撰写",
                    "prompt": "请帮我编写视频脚本：\n1. 开场设计\n2. 内容结构安排\n3. 转场设计\n4. 画面描述\n5. 旁白/对白文案",
                    "instruction": "编写详细的分镜脚本"
                },
                {
                    "title": "后期规划",
                    "prompt": "请提供后期制作建议：\n1. 剪辑节奏\n2. 音乐选择\n3. 特效使用\n4. 字幕设计\n5. 调色风格",
                    "instruction": "规划后期制作细节"
                },
                {
                    "title": "发布优化",
                    "prompt": "请提供发布优化建议：\n1. 标题优化\n2. 封面设计\n3. 简介文案\n4. 标签策略\n5. 互动设计",
                    "instruction": "优化视频发布效果"
                }
            ],
            "createdAt": "2024-02-10T14:00:00.000Z"
        },
        {
            "id": "workflow_systematic_review",
            "title": "系统性综述工作流",
            "category": "research",
            "description": "完成一篇系统性文献综述的完整流程",
            "tags": ["研究", "文献综述", "学术"],
            "steps": [
                {
                    "title": "研究问题界定",
                    "prompt": "作为一位在系统综述领域有16年经验的研究专家，我参与过多个大型系统综述项目。请基于这个身份，帮我界定系统综述的范围：\n1. 研究问题的具体化\n2. 纳入排除标准\n3. 检索策略设计\n4. PICOS框架制定\n5. 预期成果设定",
                    "instruction": "明确综述范围和目标"
                },
                {
                    "title": "文献检索",
                    "prompt": "请协助设计检索策略：\n1. 关键词组合\n2. 数据库选择\n3. 检索式编写\n4. 文献筛选流程\n5. 文献管理方案",
                    "instruction": "系统性检索和筛选文献"
                },
                {
                    "title": "质量评估",
                    "prompt": "请帮我评估文献质量：\n1. 评估工具选择\n2. 偏倚风险评估\n3. 证据等级评定\n4. 异质性分析\n5. 敏感性分析",
                    "instruction": "评估纳入文献的质量"
                },
                {
                    "title": "数据提取",
                    "prompt": "请协助设计数据提取：\n1. 提取表格设计\n2. 基本信息提取\n3. 结果数据提取\n4. 亚组分析计划\n5. 综合分析方法",
                    "instruction": "系统提取和整理数据"
                }
            ],
            "createdAt": "2024-02-10T15:00:00.000Z"
        },
        {
            "id": "workflow_podcast_production",
            "title": "播客节目制作工作流",
            "category": "media",
            "description": "完整的播客节目策划和制作流程",
            "tags": ["播客", "音频", "内容创作"],
            "steps": [
                {
                    "title": "节目策划",
                    "prompt": "作为一位制作过多个热门播客节目的音频内容制作人，我的节目在主流平台累计播放超过1000万次。请基于这个身份，帮我策划播客节目：\n1. 节目定位和风格\n2. 目标受众画像\n3. 节目框架设计\n4. 选题策略\n5. 差异化亮点",
                    "instruction": "确定节目定位和特色"
                },
                {
                    "title": "单集策划",
                    "prompt": "请帮我策划单集内容：\n1. 主题深度挖掘\n2. 分段内容设计\n3. 访谈问题设计\n4. 互动环节策划\n5. 时间节奏控制",
                    "instruction": "设计单集节目内容"
                },
                {
                    "title": "后期处理",
                    "prompt": "请提供后期制作建议：\n1. 音频剪辑要点\n2. 音效设计\n3. 配乐选择\n4. 混音处理\n5. 音质优化",
                    "instruction": "优化音频后期效果"
                },
                {
                    "title": "发布运营",
                    "prompt": "请提供运营策略：\n1. 发布文案优化\n2. 宣传计划\n3. 平台选择\n4. 粉丝互动策略\n5. 数据分析方向",
                    "instruction": "策划节目运营方案"
                }
            ],
            "createdAt": "2024-02-10T16:00:00.000Z"
        }
    ]
};

// Array to hold workflow objects
let workflows = [];

// 工作流分类数据
const workflowCategories = [
    {
        id: "all",
        name: "全部工作流",
        icon: "🏠",
        description: "浏览所有可用的AI提示词工作流"
    },
    {
        id: "writing",
        name: "写作创作",
        icon: "✍️",
        description: "文学创作、内容写作相关的工作流"
    },
    {
        id: "programming",
        name: "编程开发",
        icon: "💻",
        description: "编程、开发相关的工作流"
    },
    {
        id: "art",
        name: "AI绘画",
        icon: "🎨",
        description: "AI绘画创作相关的工作流"
    },
    {
        id: "business",
        name: "商业应用",
        icon: "💼",
        description: "商业、营销相关的工作流"
    },
    {
        id: "education",
        name: "教育培训",
        icon: "📚",
        description: "教育、培训相关的工作流"
    },
    {
        id: "research",
        name: "学术研究",
        icon: "🔬",
        description: "学术研究相关的工作流"
    },
    {
        id: "media",
        name: "媒体制作",
        icon: "🎥",
        description: "视频、音频等媒体制作相关的工作流"
    }
];

// 当前选中的分类
let currentCategory = 'all';

// Utility: show toast message (reuse from main if available, else simple implementation)
function showToast(message) {
  let toast = document.getElementById('workflowToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'workflowToast';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = 'rgba(0,0,0,0.8)';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.zIndex = '2000';
    toast.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2000);
}

// Load workflows from local storage
async function loadWorkflows() {
  const saved = localStorage.getItem(LOCAL_WORKFLOW_KEY);
  if (saved) {
    workflows = JSON.parse(saved);
  } else {
    // 使用预设数据
    workflows = defaultWorkflowsData.workflows;
    // 保存到localStorage作为缓存
    saveWorkflows();
  }
}

// Save workflows to local storage
function saveWorkflows() {
  localStorage.setItem(LOCAL_WORKFLOW_KEY, JSON.stringify(workflows));
}

// Render workflow cards in the main container
function renderWorkflows() {
  const container = document.querySelector('.workflow-container');
  if (!container) return;
  
  const filteredWorkflows = currentCategory === 'all' 
      ? workflows 
      : workflows.filter(w => w.category === currentCategory);

  container.innerHTML = '';
  if (filteredWorkflows.length === 0) {
    container.innerHTML = '<p>当前分类暂无工作流提示词，请新建一个。</p>';
    return;
  }
  
  filteredWorkflows.forEach(workflow => {
    const card = createWorkflowCard(workflow);
    container.appendChild(card);
  });
}

function createWorkflowCard(workflow) {
    const card = document.createElement('div');
    card.className = 'workflow-card';

    const header = document.createElement('div');
    header.className = 'workflow-header';

    const titleSection = document.createElement('div');
    titleSection.className = 'workflow-title';
    
    const title = document.createElement('h3');
    title.textContent = workflow.title;
    titleSection.appendChild(title);

    const meta = document.createElement('div');
    meta.className = 'workflow-meta';

    const category = document.createElement('span');
    category.className = 'workflow-category';
    category.textContent = workflow.category;
    meta.appendChild(category);

    const tags = document.createElement('div');
    tags.className = 'workflow-tags';
    workflow.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'workflow-tag';
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
    });
    meta.appendChild(tags);
    titleSection.appendChild(meta);
    header.appendChild(titleSection);

    const expandBtn = document.createElement('button');
    expandBtn.className = 'expand-btn';
    expandBtn.innerHTML = '<span class="expand-icon">▼</span>';
    header.appendChild(expandBtn);

    const description = document.createElement('div');
    description.className = 'workflow-description';
    description.textContent = workflow.description;

    card.appendChild(header);
    card.appendChild(description);

    // 点击展开按钮时显示详情模态框
    expandBtn.addEventListener('click', () => {
        showWorkflowDetail(workflow);
    });

    return card;
}

// 显示工作流详情
function showWorkflowDetail(workflow) {
    const modal = document.getElementById('workflowDetailModal');
    const title = modal.querySelector('.workflow-detail-title h3');
    const category = modal.querySelector('.workflow-category');
    const tags = modal.querySelector('.workflow-tags');
    const description = modal.querySelector('.workflow-description');
    const steps = modal.querySelector('.workflow-steps');
    const date = modal.querySelector('.workflow-date');

    title.textContent = workflow.title;
    category.textContent = workflow.category;
    
    tags.innerHTML = '';
    workflow.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'workflow-tag';
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
    });

    description.textContent = workflow.description;
    
    steps.innerHTML = '';
    workflow.steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'workflow-step';

        const stepHeader = document.createElement('div');
        stepHeader.className = 'step-header';

        const stepTitle = document.createElement('h4');
        stepTitle.textContent = `${index + 1}. ${step.title}`;
        stepHeader.appendChild(stepTitle);

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-step-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.title = '复制提示词';
        stepHeader.appendChild(copyBtn);

        const stepContent = document.createElement('div');
        stepContent.className = 'step-content';

        const promptDiv = document.createElement('div');
        promptDiv.className = 'step-prompt';
        const promptPre = document.createElement('pre');
        promptPre.textContent = step.prompt;
        promptDiv.appendChild(promptPre);

        const instructionDiv = document.createElement('div');
        instructionDiv.className = 'step-instruction';
        instructionDiv.textContent = step.instruction;

        stepContent.appendChild(promptDiv);
        stepContent.appendChild(instructionDiv);

        stepDiv.appendChild(stepHeader);
        stepDiv.appendChild(stepContent);
        steps.appendChild(stepDiv);

        // 添加复制功能
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(step.prompt).then(() => {
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });

    date.textContent = `创建于 ${new Date(workflow.createdAt).toLocaleDateString()}`;
    modal.classList.add('show');

    // 添加关闭按钮事件
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// Create HTML for a new workflow step
function createStepHtml(stepNumber) {
  return `
    <div class="workflow-step" style="border:1px solid #ddd; padding:8px; margin-bottom:8px; border-radius:4px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <span>步骤 ${stepNumber}</span>
        <button type="button" class="remove-step-btn" style="background:none; border:none; color:#ff3b30; font-size:1rem; cursor:pointer;">×</button>
      </div>
      <div class="form-group">
        <label class="required">标题</label>
        <input type="text" class="step-title" required placeholder="请输入步骤标题" style="width:100%; padding:4px;">
      </div>
      <div class="form-group">
        <label class="required">提示内容</label>
        <textarea class="step-prompt" required placeholder="请输入提示内容" rows="3" style="width:100%; padding:4px;"></textarea>
      </div>
      <div class="form-group">
        <label>说明 (可选)</label>
        <textarea class="step-instruction" placeholder="请输入步骤说明" rows="2" style="width:100%; padding:4px;"></textarea>
      </div>
    </div>
  `;
}

// Update step numbers after removal
function updateStepNumbers() {
  const stepElements = document.querySelectorAll('.workflow-step');
  stepElements.forEach((stepEl, index) => {
    const numberSpan = stepEl.querySelector('span');
    if (numberSpan) {
      numberSpan.textContent = `步骤 ${index + 1}`;
    }
  });
}

// Gather step data from the modal
function getWorkflowSteps() {
  const steps = [];
  const stepElements = document.querySelectorAll('.workflow-steps-list .workflow-step');
  stepElements.forEach(stepEl => {
    const title = stepEl.querySelector('.step-title').value.trim();
    const prompt = stepEl.querySelector('.step-prompt').value.trim();
    const instruction = stepEl.querySelector('.step-instruction').value.trim();
    if (title && prompt) {
      steps.push({ title, prompt, instruction });
    }
  });
  return steps;
}

// Clear the workflow form modal
function clearWorkflowForm() {
  document.getElementById('workflowForm').reset();
  const stepsList = document.querySelector('.workflow-steps-list');
  if (stepsList) {
    stepsList.innerHTML = '';
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
  // Load saved or sample workflows
  await loadWorkflows();
  renderWorkflows();

  const newWorkflowBtn = document.getElementById('newWorkflowBtn');
  const newWorkflowModal = document.getElementById('newWorkflowModal');
  const closeWorkflowModal = document.getElementById('closeWorkflowModal');
  const cancelWorkflowBtn = document.getElementById('cancelWorkflowBtn');
  const addStepBtn = document.querySelector('.add-step-btn');
  const saveWorkflowBtn = document.getElementById('saveWorkflowBtn');
  const submitWorkflowGithubBtn = document.getElementById('submitWorkflowGithubBtn');

  // Show modal when new workflow button clicked
  newWorkflowBtn.addEventListener('click', () => {
    newWorkflowModal.classList.add('show');
    // Clear any previous form data
    clearWorkflowForm();
    // Add one default step
    const stepsList = document.querySelector('.workflow-steps-list');
    stepsList.innerHTML = createStepHtml(1);
    // Attach remove event for the default step
    attachRemoveStepEvent(stepsList.lastElementChild);
  });

  // Close modal handlers
  closeWorkflowModal.addEventListener('click', () => {
    newWorkflowModal.classList.remove('show');
  });
  cancelWorkflowBtn.addEventListener('click', () => {
    newWorkflowModal.classList.remove('show');
  });

  // Clicking outside modal-content closes modal
  newWorkflowModal.addEventListener('click', (e) => {
    if (e.target === newWorkflowModal) {
      newWorkflowModal.classList.remove('show');
    }
  });

  // Add step button
  addStepBtn.addEventListener('click', () => {
    const stepsList = document.querySelector('.workflow-steps-list');
    const stepCount = stepsList.querySelectorAll('.workflow-step').length;
    stepsList.insertAdjacentHTML('beforeend', createStepHtml(stepCount + 1));
    // Attach remove event to the new step
    attachRemoveStepEvent(stepsList.lastElementChild);
  });

  // Save workflow to local storage
  saveWorkflowBtn.addEventListener('click', () => {
    const title = document.getElementById('workflowTitle').value.trim();
    const category = document.getElementById('workflowCategory').value;
    const description = document.getElementById('workflowDescription').value.trim();
    const tags = document.getElementById('workflowTags').value.split(',').map(t => t.trim()).filter(Boolean);
    const steps = getWorkflowSteps();

    if (!title || !category || steps.length === 0) {
      showToast('请填写必填字段并至少添加一个步骤');
      return;
    }

    const newWorkflow = {
      id: 'workflow_' + Date.now(),
      title,
      category,
      description,
      tags,
      steps,
      createdAt: new Date().toISOString()
    };
    workflows.push(newWorkflow);
    saveWorkflows();
    renderWorkflows();
    newWorkflowModal.classList.remove('show');
    showToast('工作流提示词已保存到本地');
  });

  // Submit workflow to GitHub
  submitWorkflowGithubBtn.addEventListener('click', () => {
    const title = document.getElementById('workflowTitle').value.trim();
    const category = document.getElementById('workflowCategory').value;
    const description = document.getElementById('workflowDescription').value.trim();
    const tags = document.getElementById('workflowTags').value;
    const steps = getWorkflowSteps();

    if (!title || !category || steps.length === 0) {
      showToast('请填写必填字段并至少添加一个步骤');
      return;
    }

    // Construct GitHub issue URL
    const issueTitle = encodeURIComponent(`提交新工作流: ${title}`);
    let issueBody = `### 工作流标题\n${title}\n\n`;
    issueBody += `### 分类\n${category}\n\n`;
    issueBody += `### 描述\n${description || '无'}\n\n`;
    issueBody += `### 标签\n${tags || '无'}\n\n`;
    issueBody += `### 步骤\n`;
    steps.forEach((step, index) => {
      issueBody += `\n**步骤 ${index + 1}: ${step.title}**\n`;
      issueBody += `提示内容: ${step.prompt}\n`;
      if (step.instruction) {
        issueBody += `说明: ${step.instruction}\n`;
      }
    });
    issueBody = encodeURIComponent(issueBody);
    const githubUrl = `https://github.com/Myyjs1/ai-prompts/issues/new?title=${issueTitle}&body=${issueBody}`;
    window.open(githubUrl, '_blank');
    newWorkflowModal.classList.remove('show');
  });

  // 渲染分类和工作流
  renderCategories();
  renderWorkflows();

  // 添加导入/导出按钮到header-actions
  const headerActions = document.querySelector('.header-actions');
  if (headerActions) {
    const importExportBtn = document.createElement('button');
    importExportBtn.className = 'import-export-btn';
    importExportBtn.title = '导入/导出';
    importExportBtn.innerHTML = `
        <span>📥</span>
        <span class="btn-text">导入/导出</span>
    `;
    headerActions.insertBefore(importExportBtn, headerActions.firstChild);

    // 创建文件输入元素
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // 创建导入/导出菜单
    const menu = document.createElement('div');
    menu.className = 'import-export-menu';
    menu.innerHTML = `
        <button class="menu-item export-btn">
            <span>📤</span> 导出工作流
        </button>
        <button class="menu-item import-btn">
            <span>📥</span> 导入工作流
        </button>
    `;
    menu.style.display = 'none';
    document.body.appendChild(menu);

    // 导入/导出按钮点击事件
    importExportBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = importExportBtn.getBoundingClientRect();
        menu.style.position = 'absolute';
        menu.style.top = rect.bottom + 'px';
        menu.style.left = rect.left + 'px';
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });

    // 点击其他地方关闭菜单
    document.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    // 阻止菜单点击事件冒泡
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // 导出按钮点击事件
    menu.querySelector('.export-btn').addEventListener('click', () => {
        exportWorkflows();
        menu.style.display = 'none';
    });

    // 导入按钮点击事件
    menu.querySelector('.import-btn').addEventListener('click', () => {
        fileInput.click();
        menu.style.display = 'none';
    });

    // 文件选择事件
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            importWorkflows(e.target.files[0]);
        }
        e.target.value = ''; // 清除选择，允许重复选择同一文件
    });
  }
});

// Attach event listener to remove step button in a step element
function attachRemoveStepEvent(stepElement) {
  if (!stepElement) return;
  const removeBtn = stepElement.querySelector('.remove-step-btn');
  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = stepElement.parentElement;
      stepElement.remove();
      updateStepNumbers();
    });
  }
}

// 渲染分类列表
function renderCategories() {
    const categoryList = document.querySelector('.category-list');
    if (!categoryList) return;

    categoryList.innerHTML = workflowCategories.map(category => `
        <div class="category-item ${category.id === currentCategory ? 'active' : ''}" data-category="${category.id}">
            <span class="category-icon">${category.icon}</span>
            <span class="category-name">${category.name}</span>
        </div>
    `).join('');

    // 更新分类标题和描述
    const categoryInfo = workflowCategories.find(c => c.id === currentCategory);
    if (categoryInfo) {
        document.querySelector('.category-title').textContent = categoryInfo.name;
        document.querySelector('.category-description').textContent = categoryInfo.description;
    }

    // 添加分类点击事件
    categoryList.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            currentCategory = item.dataset.category;
            document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            renderCategories();
            renderWorkflows();
        });
    });
}

// 导出工作流数据
function exportWorkflows() {
    const data = {
        version: "1.0",
        exportDate: new Date().toISOString(),
        workflows: workflows
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-workflows-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('工作流数据已导出');
}

// 导入工作流数据
async function importWorkflows(file) {
    try {
        const text = await file.text();
        const data = JSON.parse(text);
        
        // 验证数据格式
        if (!data.workflows || !Array.isArray(data.workflows)) {
            throw new Error('无效的工作流数据格式');
        }
        
        // 验证每个工作流的必要字段
        data.workflows.forEach(workflow => {
            if (!workflow.id || !workflow.title || !workflow.category || !workflow.steps) {
                throw new Error('工作流数据缺少必要字段');
            }
        });
        
        // 合并工作流数据，避免重复
        const existingIds = new Set(workflows.map(w => w.id));
        const newWorkflows = data.workflows.filter(w => !existingIds.has(w.id));
        
        workflows.push(...newWorkflows);
        saveWorkflows();
        renderWorkflows();
        
        showToast(`成功导入 ${newWorkflows.length} 个工作流`);
    } catch (error) {
        showToast('导入失败：' + error.message);
        console.error('Import error:', error);
    }
}
