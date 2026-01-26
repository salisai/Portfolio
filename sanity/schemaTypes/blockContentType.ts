import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, CodeIcon, PlayIcon} from '@sanity/icons'

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ]
    }),
    // Code block with syntax highlighting
    defineArrayMember({
      type: 'object',
      name: 'codeBlock',
      title: 'Code Block',
      icon: CodeIcon,
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'Python', value: 'python'},
              {title: 'Java', value: 'java'},
              {title: 'C++', value: 'cpp'},
              {title: 'C', value: 'c'},
              {title: 'C#', value: 'csharp'},
              {title: 'Go', value: 'go'},
              {title: 'Rust', value: 'rust'},
              {title: 'PHP', value: 'php'},
              {title: 'Ruby', value: 'ruby'},
              {title: 'Swift', value: 'swift'},
              {title: 'Kotlin', value: 'kotlin'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'SCSS', value: 'scss'},
              {title: 'JSON', value: 'json'},
              {title: 'YAML', value: 'yaml'},
              {title: 'Markdown', value: 'markdown'},
              {title: 'SQL', value: 'sql'},
              {title: 'Bash', value: 'bash'},
              {title: 'Shell', value: 'shell'},
              {title: 'Plain Text', value: 'text'},
            ],
          },
        },
        {
          name: 'code',
          type: 'text',
          title: 'Code',
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Filename (optional)',
        },
      ],
      preview: {
        select: {
          language: 'language',
          code: 'code',
        },
        prepare({language, code}) {
          const preview = code ? code.split('\n')[0] : 'No code'
          return {
            title: `Code Block (${language || 'text'})`,
            subtitle: preview,
          }
        },
      },
    }),
    // Math formula block
    defineArrayMember({
      type: 'object',
      name: 'mathFormula',
      title: 'Math Formula',
      icon: () => '∑',
      fields: [
        {
          name: 'formula',
          type: 'text',
          title: 'LaTeX Formula',
          description: 'Enter LaTeX math formula (e.g., E = mc^2 or \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a})',
        },
        {
          name: 'displayMode',
          type: 'boolean',
          title: 'Display Mode',
          description: 'Render as block (centered) instead of inline',
          initialValue: true,
        },
      ],
      preview: {
        select: {
          formula: 'formula',
        },
        prepare({formula}) {
          return {
            title: 'Math Formula',
            subtitle: formula || 'No formula',
          }
        },
      },
    }),
    // YouTube video embed
    defineArrayMember({
      type: 'object',
      name: 'youtube',
      title: 'YouTube Video',
      icon: PlayIcon,
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'YouTube URL',
          description: 'Paste the full YouTube video URL',
          validation: (Rule) =>
            Rule.required().custom((url) => {
              if (!url) return true
              const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
              return youtubeRegex.test(url) || 'Must be a valid YouTube URL'
            }),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption (optional)',
        },
      ],
      preview: {
        select: {
          url: 'url',
        },
        prepare({url}) {
          const videoId = url
            ? url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1]
            : null
          return {
            title: 'YouTube Video',
            subtitle: videoId ? `Video ID: ${videoId}` : 'No URL provided',
          }
        },
      },
    }),
  ],
})
