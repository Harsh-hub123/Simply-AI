export type TerritoryId = 'foundations' | 'learning' | 'deep-learning' | 'modern-ai';

export type ConceptVisual =
  | { kind: 'hub'; items: string[]; center: string }
  | { kind: 'vector'; subject: string; details: string[]; result: string }
  | { kind: 'compare'; items: Array<{ title: string; value: string }>; result: string; note: string }
  | { kind: 'model'; training: string; model: string; input: string; prediction: string }
  | { kind: 'gradient'; parameters: string; parameterNote: string; loss: string; gradient: string; question: string }
  | { kind: 'feedback'; steps: string[]; repeat: string }
  | { kind: 'layers'; steps: string[] }
  | { kind: 'representations'; steps: Array<{ title: string; note?: string }> }
  | { kind: 'branch'; source: string; model: string; taskLabel: string; tasks: string[] }
  | { kind: 'system'; entry: string; core: string; parts: string[]; result: string };

export interface RoadmapConcept {
  id: string;
  slug: string;
  order: number;
  mapTitle: string;
  title: string;
  territory: TerritoryId;
  territoryLabel: string;
  tagline: string;
  body: string[];
  accentParagraph?: number;
  visual: ConceptVisual;
  keyLabel: string;
  keyText: string[];
  deeper: string[];
  nextConcept?: string;
  lessonStatus: 'planned' | 'available';
  learnRoute: string;
  icon: 'math' | 'data' | 'model' | 'loss' | 'gradient' | 'optimization' | 'neural' | 'layers' | 'modern-model' | 'system';
}

export const territories = [
  { id: 'foundations' as const, title: 'Foundations', subtitle: 'The language of AI' },
  { id: 'learning' as const, title: 'Learning Mechanism', subtitle: 'How models learn' },
  { id: 'deep-learning' as const, title: 'Deep Learning', subtitle: 'Scaling intelligence' },
  { id: 'modern-ai' as const, title: 'Modern AI', subtitle: 'Real-world impact' },
];

export const roadmapConcepts: RoadmapConcept[] = [
  {
    id: '01', slug: 'mathematics', order: 1, mapTitle: 'Mathematics', title: 'Mathematics for AI',
    territory: 'foundations', territoryLabel: 'FOUNDATIONS', tagline: 'The language beneath AI', icon: 'math',
    body: [
      'AI needs a precise way to work with information, relationships, change, and uncertainty.',
      'Mathematics gives us that language.',
      'It helps us describe information with numbers and structures, understand how things are connected, study what happens when something changes, and reason when the answer is uncertain.',
    ],
    accentParagraph: 1,
    visual: { kind: 'hub', items: ['Information', 'Relationships', 'Change', 'Uncertainty'], center: 'Mathematics' },
    keyLabel: 'The goal here is not to master every formula first.',
    keyText: ['It is to understand why mathematical ideas keep appearing throughout AI and what each one helps us describe.'],
    deeper: ['Later, we will go much deeper into the mathematics as each concept becomes necessary.'],
    nextConcept: 'data-representation', lessonStatus: 'planned', learnRoute: '/learn?concept=mathematics',
  },
  {
    id: '02', slug: 'data-representation', order: 2, mapTitle: 'Data\nRepresentation', title: 'Data Representation',
    territory: 'foundations', territoryLabel: 'FOUNDATIONS', tagline: 'Turning the real world into something a model can work with', icon: 'data',
    body: [
      'The world gives us images, words, sounds, measurements, objects, and behaviour.',
      'But a model cannot work with these things exactly as we experience them.',
      'We first need to express the useful information in a structured form that computation can work with.',
      'That is the role of data representation.',
    ],
    visual: { kind: 'vector', subject: 'House', details: ['Size: 1200 sq ft', 'Bedrooms: 3', 'Age: 8 years'], result: '[ 1200, 3, 8 ]' },
    keyLabel: 'The important idea is:',
    keyText: ['The model does not receive the real-world object itself. It receives a representation of information about it.', 'And different tasks may need different representations.'],
    deeper: ['Later, we will explore how images, text, sound, and other forms of information are represented for AI systems.'],
    nextConcept: 'model', lessonStatus: 'planned', learnRoute: '/learn?concept=data-representation',
  },
  {
    id: '03', slug: 'model', order: 3, mapTitle: 'Model', title: 'Model', territory: 'learning', territoryLabel: 'LEARNING MECHANISM',
    tagline: 'The part that turns information into a prediction', icon: 'model',
    body: ['Once information is represented in a usable form, we need something that can learn from it and make a prediction.', 'That is the role of a model.', 'During training, a model learns patterns and relationships from training data.', 'It then uses what it has learned to produce an output for new input.'],
    visual: { kind: 'model', training: 'Training Data', model: 'Model learns patterns', input: 'New Input', prediction: 'Prediction' },
    keyLabel: 'The important idea is:', keyText: ['A model learns a relationship from data and uses that relationship to make predictions.'],
    deeper: ['Later, we will explore what actually changes inside the model while this learning happens.'],
    nextConcept: 'loss', lessonStatus: 'planned', learnRoute: '/learn?concept=model',
  },
  {
    id: '04', slug: 'loss', order: 4, mapTitle: 'Loss', title: 'Loss', territory: 'learning', territoryLabel: 'LEARNING MECHANISM',
    tagline: 'A way to measure the mistake', icon: 'loss',
    body: ['A model can make a prediction.', 'But to learn, we need to know how far that prediction is from the actual outcome.', 'That is where loss comes in.', 'Loss turns the model’s mistake into a number we can measure.'],
    visual: { kind: 'compare', items: [{ title: 'Prediction', value: '₹52L' }, { title: 'Actual value', value: '₹60L' }], result: 'Error', note: '₹8 lakh' },
    keyLabel: 'The important idea is:', keyText: ['Loss tells us how wrong the model’s prediction is.', 'A smaller loss generally means the prediction is closer to the outcome we wanted.'],
    deeper: ['Later, we will explore different loss functions and how they guide the learning process.'],
    nextConcept: 'gradient', lessonStatus: 'planned', learnRoute: '/learn?concept=loss',
  },
  {
    id: '05', slug: 'gradient', order: 5, mapTitle: 'Gradient', title: 'Gradient', territory: 'learning', territoryLabel: 'LEARNING MECHANISM',
    tagline: 'A direction for improvement', icon: 'gradient',
    body: ["We can now measure the model's mistake using loss.", 'But knowing that the model is wrong is not enough.', 'We still need to understand:', 'What should change inside the model to make that loss smaller?', 'Inside a model are adjustable values called parameters.', 'These parameters influence how the model turns an input into a prediction.', 'During learning, we need to understand how changes in those parameters would affect the loss.', 'This is where the gradient becomes useful.'],
    visual: { kind: 'gradient', parameters: 'Parameters', parameterNote: 'θ₁ · θ₂ · θ₃ · …', loss: 'Loss', gradient: 'Gradient', question: 'How would changing these parameters affect the loss?' },
    keyLabel: 'One important detail:', keyText: ['The gradient points in the direction where the loss increases most rapidly.', 'To reduce the loss, learning typically moves in the opposite direction.'],
    deeper: ['Later, we will explore this much more deeply because gradients are one of the key ideas behind how modern models learn.'],
    nextConcept: 'optimization', lessonStatus: 'planned', learnRoute: '/learn?concept=gradient',
  },
  {
    id: '06', slug: 'optimization', order: 6, mapTitle: 'Optimization', title: 'Optimization', territory: 'learning', territoryLabel: 'LEARNING MECHANISM',
    tagline: 'Turning feedback into improvement', icon: 'optimization',
    body: ["The gradient tells us how changes in the model's parameters would affect the loss.", 'But the parameters still need to actually change.', 'That is the role of optimization.', "Optimization repeatedly updates the model's parameters in a direction that helps reduce the loss."],
    visual: { kind: 'feedback', steps: ['Prediction', 'Loss', 'Gradient', 'Update Parameters'], repeat: '↺ Repeat' },
    keyLabel: 'The important idea is:', keyText: ['Optimization is the process that turns gradient information into repeated parameter updates.', 'One important factor is the learning rate, which controls how large each update step is.'],
    deeper: ['Later, we’ll explore optimization methods such as gradient descent, SGD and Adam. We’ll see how they update a model’s parameters and why those differences matter for learning.'],
    nextConcept: 'neural-networks', lessonStatus: 'planned', learnRoute: '/learn?concept=optimization',
  },
  {
    id: '07', slug: 'neural-networks', order: 7, mapTitle: 'Neural\nNetworks', title: 'Neural Networks', territory: 'deep-learning', territoryLabel: 'DEEP LEARNING',
    tagline: 'Learning more complex relationships', icon: 'neural',
    body: ['So far, we’ve described a model as something that learns a relationship between inputs and outputs. But some patterns, such as those needed to recognize objects in images, are too complex for a simple model to capture well.', 'A neural network builds a more flexible model by combining many small computational units, called neurons, into layers.', 'Each layer transforms the information it receives into a new representation that the next layer can work with. Together, these layers learn useful patterns that help the network produce a prediction.'],
    visual: { kind: 'layers', steps: ['Input', 'Layer 1', 'Layer 2', 'Layer 3', 'Prediction'] },
    keyLabel: 'The core idea', keyText: ['A neural network turns an input into a prediction through a sequence of learned transformations.', 'It learns by repeating the same training loop we’ve already explored:', 'Prediction → Loss → Gradients → Parameter update → Repeat'],
    deeper: ['Later, we’ll look inside the network: how neurons and layers transform information, why activation functions matter, how a forward pass produces a prediction, and how backpropagation calculates the gradients used in training.'],
    nextConcept: 'representation-learning', lessonStatus: 'planned', learnRoute: '/learn?concept=neural-networks',
  },
  {
    id: '08', slug: 'representation-learning', order: 8, mapTitle: 'Representation\nLearning', title: 'Representation Learning', territory: 'deep-learning', territoryLabel: 'DEEP LEARNING',
    tagline: 'Learning what information matters', icon: 'layers',
    body: ['A neural network does more than transform an input into a prediction.', 'As information passes through its layers, the network can learn new internal representations that make useful patterns easier to recognize.', 'For example, instead of working only with raw pixels, deeper layers may learn representations that capture more meaningful visual patterns.'],
    visual: { kind: 'representations', steps: [{ title: 'Raw Input' }, { title: 'Early Representation', note: 'simple patterns' }, { title: 'Deeper Representation', note: 'more meaningful patterns' }, { title: 'Prediction' }] },
    keyLabel: 'The important idea is:', keyText: ['A neural network can learn how to represent information in ways that make the task easier.', 'This is one of the major reasons deep learning became so powerful.'],
    deeper: ['Later, we will explore embeddings, learned features, latent representations, and how modern models build useful internal representations automatically.'],
    nextConcept: 'modern-ai-models', lessonStatus: 'planned', learnRoute: '/learn?concept=representation-learning',
  },
  {
    id: '09', slug: 'modern-ai-models', order: 9, mapTitle: 'Modern\nAI Models', title: 'Modern AI Models', territory: 'modern-ai', territoryLabel: 'MODERN AI',
    tagline: 'From one task to many', icon: 'modern-model',
    body: ['Traditional machine-learning models are often trained for a specific task.', 'Modern AI models can be trained on much broader data and learn representations that are useful across many different tasks.', 'These large pretrained models can then be prompted, adapted, or fine-tuned for things like language, images, code, and other forms of information.'],
    visual: { kind: 'branch', source: 'Large-scale Training Data', model: 'Pretrained Model', taskLabel: 'Many Tasks', tasks: ['Question Answering', 'Generation', 'Classification', 'Code', 'Images'] },
    keyLabel: 'The important idea is:', keyText: ['Modern AI increasingly starts with powerful pretrained models that can be adapted to many different problems.', 'This is the foundation behind technologies such as ChatGPT, Claude, HiggsField etc.'],
    deeper: ['Later, we will explore transformers, pretraining, foundation models, LLMs, and how these models gain their broad capabilities.'],
    nextConcept: 'modern-ai-systems', lessonStatus: 'planned', learnRoute: '/learn?concept=modern-ai-models',
  },
  {
    id: '10', slug: 'modern-ai-systems', order: 10, mapTitle: 'Modern\nAI Systems', title: 'Modern AI Systems', territory: 'modern-ai', territoryLabel: 'MODERN AI',
    tagline: 'More than just a model', icon: 'system',
    body: ['A powerful AI model can generate predictions, text, images, code, and reasoning.', 'But a real AI product usually needs much more than the model itself.', 'Modern AI systems combine models with data, tools, memory, retrieval, APIs, interfaces, and orchestration so the system can do useful work in the real world.'],
    visual: { kind: 'system', entry: 'User / Application', core: 'AI System', parts: ['Model', 'Data', 'Tools', 'Memory', 'Retrieval'], result: 'Actions / Responses' },
    keyLabel: 'The important idea is:', keyText: ['The model is only one component inside a complete AI system.', 'What makes the product useful is how all of these components work together.'],
    deeper: ['Later, we will explore RAG, agents, tool use, orchestration, deployment, monitoring, and how production AI systems are actually built.'],
    lessonStatus: 'planned', learnRoute: '/learn?concept=modern-ai-systems',
  },
];

export const conceptBySlug = new Map(roadmapConcepts.map((concept) => [concept.slug, concept]));
