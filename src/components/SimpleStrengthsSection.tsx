import { useState, useEffect, useRef } from 'react'
import { Card } from "@/components/ui/card"

export function SimpleStrengthsSection() {
  const [selectedStrength, setSelectedStrength] = useState<{ rank: number; name: string; domain: string; description: string } | null>(null)
  const [selectedCombo, setSelectedCombo] = useState<{ id: string; title: string; strengthRanks: number[]; description: string; achievement: string } | null>(null)
  const [accordionPosition, setAccordionPosition] = useState({ left: 0, width: 0 })
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false)
  const isAutoScrolling = useRef(false)
  const strengthsContainerRef = useRef<HTMLDivElement>(null)
  const combosContainerRef = useRef<HTMLDivElement>(null)

  // Top 12 strengths based on your profile
  const strengthsData = [
    { rank: 1, name: 'Learner', domain: 'Strategic Thinking', description: 'Continuous upskilling, rapid market adaptation, constant benchmarking' },
    { rank: 2, name: 'Achiever', domain: 'Executing', description: 'Deadline delivery, persistent execution, unwavering milestone focus' },
    { rank: 3, name: 'Activator', domain: 'Influencing', description: 'Fast product launches, quick prototyping, pushing teams to action' },
    { rank: 4, name: 'Arranger', domain: 'Executing', description: 'Cross-functional alignment, resource orchestration, process optimization' },
    { rank: 5, name: 'Intellection', domain: 'Strategic Thinking', description: 'Deep product analysis, hypothesis-driven planning, strategic clarity' },
    { rank: 6, name: 'Individualization', domain: 'Relationship Building', description: 'Team talent matching, personalized motivation, strength-based delegation' },
    { rank: 7, name: 'Input', domain: 'Strategic Thinking', description: 'Competitor intelligence, user feedback collection, knowledge integration' },
    { rank: 8, name: 'Significance', domain: 'Influencing', description: 'High-impact project focus, driving product vision, making results visible' },
    { rank: 9, name: 'Competition', domain: 'Influencing', description: 'Performance tracking, market leadership, raising product standards' },
    { rank: 10, name: 'Strategic', domain: 'Strategic Thinking', description: 'Scenario mapping, prioritized roadmapping, solution pathfinding' },
    { rank: 11, name: 'Self-Assurance', domain: 'Influencing', description: 'Confident product decisions, risk embracing, steady navigation' },
    { rank: 12, name: 'Context', domain: 'Strategic Thinking', description: 'Historical product insight, learning from launches, applied industry lessons' },
  ]

  // Combo data from Top-12-Strengths-PM-Execution.md
  const combosData = [
    {
      id: 'momentum-engine',
      title: 'Momentum Engine',
      strengthRanks: [1, 2, 3],
      description: 'Learn fast, act fast, deliver consistently. Jump into action when teams get stuck in endless discussions.',
      achievement: 'Raised livedigital video platform revenue by 47% in 6 months through 70+ customer interviews and rapid A/B test iterations.'
    },
    {
      id: 'execution-drive',
      title: 'Execution Drive',
      strengthRanks: [2, 3, 4],
      description: 'Get things done quickly while keeping everyone aligned and pushing teams to move fast.',
      achievement: 'Migrated AutoScout24 seller flow achieving 20% conversion improvement through rapid September rollout and cross-team coordination.'
    },
    {
      id: 'learning-ops',
      title: 'Learning Ops',
      strengthRanks: [1, 2, 4],
      description: 'Learn what teams need, then reorganize people and processes to work better.',
      achievement: 'Revitalized AutoScout24\'s abandoned native app team by securing Android resources and enabling weekly iOS feature releases.'
    },
    {
      id: 'discovery-sprint',
      title: 'Discovery Sprint',
      strengthRanks: [1, 3, 5],
      description: 'Turn user research into testable ideas quickly and run experiments with proper analysis.',
      achievement: 'Improved livedigital video platform activation to paid subscriptions by 12% through 2 months of monetization experiments.'
    },
    {
      id: 'launch-control',
      title: 'Launch Control',
      strengthRanks: [3, 4, 5],
      description: 'Move fast on launches while coordinating all the moving pieces and spotting problems early.',
      achievement: 'Engineered AG1 POC prototypes in 2 weeks by orchestrating streamlined UX/UI and engineering processes.'
    },
    {
      id: 'talent-catalyst',
      title: 'Talent Catalyst',
      strengthRanks: [1, 2, 6],
      description: 'Help team members grow their skills and match people with work they\'re good at.',
      achievement: 'Upskilled AutoScout24 team in A/B testing by arranging knowledge sessions with growth team, enabling proper experiment implementation.'
    },
    {
      id: 'impact-pulse',
      title: 'Impact Pulse',
      strengthRanks: [3, 8, 9],
      description: 'Drive team to be the top performer in the company and get recognized for results.',
      achievement: 'Boosted AG1 retention by 7.1% among 500k+ subscribers through strategic free item incentives that other teams adopted.'
    },
    {
      id: 'strategic-agility',
      title: 'Strategic Agility',
      strengthRanks: [1, 5, 10],
      description: 'Stay on top of market changes and user needs, then quickly adjust roadmap when needed.',
      achievement: 'Pivoted AutoScout24 strategy from generic entry points to personalized banners, boosting seller reengagement with 6 percentage point increase in listing conversion.'
    },
    {
      id: 'market-thrust',
      title: 'Market Thrust',
      strengthRanks: [8, 9, 10],
      description: 'Position product to win against external competitors through strategic features and market leadership.',
      achievement: 'Launched YooKassa embedded payment widget achieving 24% adoption in 3 months, positioning company as premium provider for enterprise clients.'
    },
    {
      id: 'confident-lead',
      title: 'Confident Lead',
      strengthRanks: [6, 8, 11],
      description: 'Develop team members while hitting important business goals and confidently leading through changes.',
      achievement: 'Secured buy-in from AutoScout24 engineering team to work outside their expertise area on another team\'s codebase, unlocking 2 \'big bet\' initiatives.'
    },
    {
      id: 'agile-ops',
      title: 'Agile Ops',
      strengthRanks: [3, 4, 12],
      description: 'Manage different teams working together and adapt how teams work based on project needs.',
      achievement: 'Diagnosed AutoScout24 email verification defect affecting 7% of listings and coordinated cross-team resolution process.'
    },
    {
      id: 'deep-solve',
      title: 'Deep Solve',
      strengthRanks: [5, 10, 12],
      description: 'Solve complex product problems by thinking several steps ahead and building long-term solutions.',
      achievement: 'Built AG1 server-based CDM analytics that dynamically segments users and triggers automated CRM interventions, lowering churn by 16%.'
    }
  ]

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case 'Strategic Thinking':
        return 'bg-strategic-thinking/20 border-strategic-thinking text-strategic-thinking hover:bg-strategic-thinking/30'
      case 'Executing':
        return 'bg-executing/20 border-executing text-executing hover:bg-executing/30'
      case 'Influencing':
        return 'bg-influencing/20 border-influencing text-influencing hover:bg-influencing/30'
      case 'Relationship Building':
        return 'bg-relationship-building/20 border-relationship-building text-relationship-building hover:bg-relationship-building/30'
      default:
        return 'bg-gray-500/20 border-gray-500 text-gray-700 hover:bg-gray-500/30'
    }
  }

  const getStrengthHighlighting = (strengthRank: number) => {
    if (!selectedCombo) return ''

    const isHighlighted = selectedCombo.strengthRanks.includes(strengthRank)
    if (isHighlighted) {
      return 'animate-glow ring-4 ring-highlight shadow-2xl bg-highlight/20 scale-105 z-10 relative'
    } else {
      return 'opacity-20 brightness-50 scale-95'
    }
  }

  // Auto-scroll within the strengths container to show all highlighted strengths
  useEffect(() => {
    if (selectedCombo && strengthsContainerRef.current) {
      const container = strengthsContainerRef.current
      const lastHighlightedRank = Math.max(...selectedCombo.strengthRanks)

      // Find the element for the bottom-most highlighted strength
      const lastHighlightedElement = container.querySelector(`[data-strength-rank="${lastHighlightedRank}"]`) as HTMLElement

      if (lastHighlightedElement) {
        // Get positions relative to the container
        const containerRect = container.getBoundingClientRect()
        const elementRect = lastHighlightedElement.getBoundingClientRect()

        // Calculate scroll position to show the bottom-most element at the bottom of the view
        // This ensures all highlighted strengths above it are visible
        const scrollTop = container.scrollTop + (elementRect.bottom - containerRect.bottom) + 10

        // Smooth scroll within the container only
        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        })
      }
    }
  }, [selectedCombo])

  // Auto-scroll within the combos container when a combo is expanded (mobile only)
  useEffect(() => {
    if (selectedCombo && combosContainerRef.current) {
      const container = combosContainerRef.current

      // Find the selected combo element
      const selectedComboElement = container.querySelector(`[data-combo-id="${selectedCombo.id}"]`) as HTMLElement

      if (selectedComboElement) {
        // Small delay to allow the expansion animation to complete
        setTimeout(() => {
          const containerRect = container.getBoundingClientRect()
          const elementRect = selectedComboElement.getBoundingClientRect()

          // Calculate scroll position to show the bottom of the expanded combo at the bottom of the view
          const scrollTop = container.scrollTop + (elementRect.bottom - containerRect.bottom) + 10

          // Smooth scroll within the container only
          container.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
          })
        }, 100) // Small delay to ensure expansion is complete
      }
    }
  }, [selectedCombo])

  // Reset auto-scroll flag on manual scroll
  useEffect(() => {
    const handleManualScroll = () => {
      // Only reset if this isn't an auto-scroll
      if (!isAutoScrolling.current) {
        setHasAutoScrolled(false)
      }
    }

    window.addEventListener('scroll', handleManualScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleManualScroll)
  }, [])

  // Click outside to close combo expansion
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedCombo) {
        const target = event.target as HTMLElement
        // Check if clicked outside of any combo card or expansion overlay
        if (!target.closest('[data-combo-id]') && !target.closest('.combo-expansion-overlay') && !target.closest('[data-strength-rank]')) {
          setSelectedCombo(null)
        }
      }
    }

    const handleScroll = () => {
      // DISABLED - scroll-to-close logic temporarily disabled
    }

    if (selectedCombo) {
      document.addEventListener('mousedown', handleClickOutside)
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [selectedCombo])

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            My Strategic Catalyst Profile
          </h2>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-300 p-6 lg:p-8">{/* Interactive content wrapper */}


        {/* Mobile Layout - Keep exactly as before */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            {/* Mobile Strengths Column */}
            <div className="w-full mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">My Strengths</h3>
              <p className="text-xs text-muted-foreground text-center mb-4">Click to explore details</p>
              <div ref={strengthsContainerRef} className="space-y-2 max-h-[32rem] overflow-y-auto">
                {strengthsData.map((strength) => (
              <Card
                key={strength.rank}
                data-strength-rank={strength.rank}
                className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] border-2 ${getDomainColor(strength.domain)} ${
                  selectedStrength?.rank === strength.rank ? 'ring-2 ring-primary p-1' : 'p-2'
                } ${getStrengthHighlighting(strength.rank)} relative w-[90%] mx-auto`}
                onClick={() => {
                  // If there's an active combo and this strength is part of it, don't collapse the combo
                  const isPartOfActiveCombo = selectedCombo && selectedCombo.strengthRanks.includes(strength.rank)

                  setSelectedStrength(selectedStrength?.rank === strength.rank ? null : strength)

                  // Only collapse combo if this strength is NOT part of the active combo
                  if (!isPartOfActiveCombo) {
                    setSelectedCombo(null)
                  }
                }}
              >
                <div className="text-center">
                  <div className="font-semibold text-sm">#{strength.rank} {strength.name}</div>
                </div>
                {selectedStrength?.rank === strength.rank && (
                  <div className="mt-2 pt-2 border-t border-border/30">
                    <div className="text-center space-y-2 px-3">
                      <div className="text-xs text-muted-foreground font-medium">{strength.domain}</div>
                      <p className="text-muted-foreground text-xs leading-snug">{strength.description}</p>
                    </div>
                  </div>
                )}
              </Card>
                ))}
              </div>

            </div>

            {/* Mobile Combos Column */}
            <div className="w-full mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">Strength Combos</h3>
              <p className="text-xs text-muted-foreground text-center mb-4">Click to explore combos</p>
              <div ref={combosContainerRef} className="space-y-2 max-h-[32rem] overflow-y-auto">
              {combosData.map((combo, index) => (
                <Card
                  key={combo.id}
                  data-combo-id={combo.id}
                  className={`cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 bg-background/50 border-border hover:bg-background/80 ${
                    selectedCombo?.id === combo.id ? 'bg-gradient-accent text-accent-foreground shadow-glow p-1' : 'p-2'
                  } relative w-[90%] mx-auto`}
                  style={{
                    animation: !selectedCombo ? `pulse-ring 3s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite ${index * 0.3}s` : undefined
                  }}
                  onClick={() => {
                    setSelectedCombo(selectedCombo?.id === combo.id ? null : combo)
                    setSelectedStrength(null) // Auto-collapse strength when combo is selected
                  }}
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">{combo.title}</div>
                  </div>
                  {selectedCombo?.id === combo.id && (
                    <div className="mt-2 pt-2 border-t border-border/30">
                      <div className="space-y-2 px-3">
                        <div>
                          <h4 className="font-semibold text-xs mb-1">Description:</h4>
                          <p className="text-xs leading-snug">{combo.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs mb-1">Achievement:</h4>
                          <p className="text-xs leading-snug">{combo.achievement}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - New horizontal approach */}
        <div className="hidden lg:block space-y-8">
          {/* Desktop Strengths - 2 rows of 6 */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">My Strengths</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">Click to explore details</p>
            <div className="space-y-4">
              {/* First row: Strengths 1-6 */}
              <div className="grid grid-cols-6 gap-3 items-start">
                {strengthsData.slice(0, 6).map((strength) => (
                  <Card
                    key={strength.rank}
                    data-strength-rank={strength.rank}
                    className={`p-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] border-2 ${getDomainColor(strength.domain)} ${
                      selectedStrength?.rank === strength.rank ? 'ring-2 ring-primary' : ''
                    } ${getStrengthHighlighting(strength.rank)} relative`}
                    onClick={() => {
                  // If there's an active combo and this strength is part of it, don't collapse the combo
                  const isPartOfActiveCombo = selectedCombo && selectedCombo.strengthRanks.includes(strength.rank)

                  setSelectedStrength(selectedStrength?.rank === strength.rank ? null : strength)

                  // Only collapse combo if this strength is NOT part of the active combo
                  if (!isPartOfActiveCombo) {
                    setSelectedCombo(null)
                  }
                }}
                  >
                    <div className="text-center">
                      <div className="font-semibold text-xs">#{strength.rank} {strength.name}</div>
                    </div>
                    {selectedStrength?.rank === strength.rank && (
                      <div className="mt-2 pt-2 border-t border-border/30">
                        <div className="text-center space-y-2">
                          <div className="text-xs text-muted-foreground font-medium">{strength.domain}</div>
                          <p className="text-muted-foreground text-xs leading-snug">{strength.description}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Second row: Strengths 7-12 */}
              <div className="grid grid-cols-6 gap-3 items-start">
                {strengthsData.slice(6, 12).map((strength) => (
                  <Card
                    key={strength.rank}
                    data-strength-rank={strength.rank}
                    className={`p-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] border-2 ${getDomainColor(strength.domain)} ${
                      selectedStrength?.rank === strength.rank ? 'ring-2 ring-primary' : ''
                    } ${getStrengthHighlighting(strength.rank)} relative`}
                    onClick={() => {
                  // If there's an active combo and this strength is part of it, don't collapse the combo
                  const isPartOfActiveCombo = selectedCombo && selectedCombo.strengthRanks.includes(strength.rank)

                  setSelectedStrength(selectedStrength?.rank === strength.rank ? null : strength)

                  // Only collapse combo if this strength is NOT part of the active combo
                  if (!isPartOfActiveCombo) {
                    setSelectedCombo(null)
                  }
                }}
                  >
                    <div className="text-center">
                      <div className="font-semibold text-xs">#{strength.rank} {strength.name}</div>
                    </div>
                    {selectedStrength?.rank === strength.rank && (
                      <div className="mt-2 pt-2 border-t border-border/30">
                        <div className="text-center space-y-2">
                          <div className="text-xs text-muted-foreground font-medium">{strength.domain}</div>
                          <p className="text-muted-foreground text-xs leading-snug">{strength.description}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

          </div>

          {/* Desktop Combos - 2 rows of 6 with accordion expansion */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 text-center">Strength Combos</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">Click to view involved strengths</p>
            <div className="space-y-4">
              {/* First row: Combos 1-6 */}
              <div>
                <div className="grid grid-cols-6 gap-3">
                  {combosData.slice(0, 6).map((combo, index) => (
                    <Card
                      key={combo.id}
                      data-combo-id={combo.id}
                      className={`p-3 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 bg-background/50 border-border hover:bg-background/80 ${
                        selectedCombo?.id === combo.id ? 'bg-gradient-accent text-accent-foreground shadow-glow' : ''
                      } relative`}
                      style={{
                        animation: !selectedCombo ? `pulse-ring 3s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite ${index * 0.3}s` : undefined
                      }}
                      onClick={(e) => {
                        if (selectedCombo?.id === combo.id) {
                          setSelectedCombo(null)
                        } else {
                          const rect = e.currentTarget.getBoundingClientRect()
                          const containerRect = e.currentTarget.parentElement?.getBoundingClientRect()

                          // Calculate width as exactly 2 combo widths + 1 gap between them
                          const accordionWidth = (rect.width * 2) + 12 // 12px = gap-3 (0.75rem)

                          // Check if this is one of the rightmost nodes (positions 5 or 6 in the grid)
                          const gridContainer = e.currentTarget.parentElement
                          const allCombos = Array.from(gridContainer?.children || [])
                          const comboIndex = allCombos.indexOf(e.currentTarget)
                          const isRightmostTwo = comboIndex >= 4 // positions 4 and 5 (0-indexed) are the last two

                          // Calculate position relative to the container
                          let leftPosition = rect.left - (containerRect?.left || 0)

                          // For the rightmost two nodes, align accordion's right edge with the node's right edge
                          if (isRightmostTwo) {
                            leftPosition = (rect.right - (containerRect?.left || 0)) - accordionWidth
                          }

                          setAccordionPosition({
                            left: leftPosition,
                            width: accordionWidth
                          })
                          setSelectedCombo(combo)
                          setSelectedStrength(null)

                          // Auto-scroll for first row combos
                          if (window.innerWidth >= 1024 && !hasAutoScrolled) {
                            setTimeout(() => {
                              isAutoScrolling.current = true
                              window.scrollBy({
                                top: 300,
                                behavior: 'smooth'
                              })
                              setHasAutoScrolled(true)
                              // Reset auto-scroll flag after scroll completes
                              setTimeout(() => {
                                isAutoScrolling.current = false
                              }, 1000)
                            }, 300)
                          }
                        }
                      }}
                    >
                      <div className="text-center space-y-1">
                        <div className="font-semibold text-sm">{combo.title}</div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Accordion expansion for row 1 */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  selectedCombo && combosData.slice(0, 6).some(c => c.id === selectedCombo.id) ? '' : ''
                }`}
                     style={{
                       maxHeight: selectedCombo && combosData.slice(0, 6).some(c => c.id === selectedCombo.id) ? '250px' : '0px',
                       opacity: selectedCombo && combosData.slice(0, 6).some(c => c.id === selectedCombo.id) ? 1 : 0
                     }}>
                  {selectedCombo && combosData.slice(0, 6).some(c => c.id === selectedCombo.id) && (
                    <div className="mt-4 mb-4">
                      <Card className="bg-gradient-accent text-accent-foreground p-4 shadow-glow animate-slide-down"
                            style={{
                              width: `${accordionPosition.width}px`,
                              marginLeft: `${accordionPosition.left}px`
                            }}>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-xs uppercase tracking-wider mb-1">Description</h4>
                            <p className="text-sm leading-relaxed">{selectedCombo.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xs uppercase tracking-wider mb-1">Key Achievement</h4>
                            <p className="text-sm leading-relaxed">{selectedCombo.achievement}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>

              {/* Second row: Combos 7-12 */}
              <div>
                <div className="grid grid-cols-6 gap-3">
                  {combosData.slice(6, 12).map((combo, index) => (
                    <Card
                      key={combo.id}
                      data-combo-id={combo.id}
                      className={`p-3 cursor-pointer transition-all duration-200 hover:scale-[1.02] border-2 bg-background/50 border-border hover:bg-background/80 ${
                        selectedCombo?.id === combo.id ? 'bg-gradient-accent text-accent-foreground shadow-glow' : ''
                      } relative`}
                      style={{
                        animation: !selectedCombo ? `pulse-ring 3s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite ${(index + 6) * 0.3}s` : undefined
                      }}
                      onClick={(e) => {
                        if (selectedCombo?.id === combo.id) {
                          setSelectedCombo(null)
                        } else {
                          const rect = e.currentTarget.getBoundingClientRect()
                          const containerRect = e.currentTarget.parentElement?.getBoundingClientRect()

                          // Calculate width as exactly 2 combo widths + 1 gap between them
                          const accordionWidth = (rect.width * 2) + 12 // 12px = gap-3 (0.75rem)

                          // Check if this is one of the rightmost nodes (positions 5 or 6 in the grid)
                          const gridContainer = e.currentTarget.parentElement
                          const allCombos = Array.from(gridContainer?.children || [])
                          const comboIndex = allCombos.indexOf(e.currentTarget)
                          const isRightmostTwo = comboIndex >= 4 // positions 4 and 5 (0-indexed) are the last two

                          // Calculate position relative to the container
                          let leftPosition = rect.left - (containerRect?.left || 0)

                          // For the rightmost two nodes, align accordion's right edge with the node's right edge
                          if (isRightmostTwo) {
                            leftPosition = (rect.right - (containerRect?.left || 0)) - accordionWidth
                          }

                          setAccordionPosition({
                            left: leftPosition,
                            width: accordionWidth
                          })
                          setSelectedCombo(combo)
                          setSelectedStrength(null)

                          // Auto-scroll for bottom row combos
                          if (window.innerWidth >= 1024 && !hasAutoScrolled) {
                            setTimeout(() => {
                              isAutoScrolling.current = true
                              window.scrollBy({
                                top: 300,
                                behavior: 'smooth'
                              })
                              setHasAutoScrolled(true)
                              // Reset auto-scroll flag after scroll completes
                              setTimeout(() => {
                                isAutoScrolling.current = false
                              }, 1000)
                            }, 300)
                          }
                        }
                      }}
                    >
                      <div className="text-center space-y-1">
                        <div className="font-semibold text-sm">{combo.title}</div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Accordion expansion for row 2 */}
                <div className="overflow-hidden transition-all duration-500 ease-in-out"
                     style={{
                       maxHeight: selectedCombo && combosData.slice(6, 12).some(c => c.id === selectedCombo.id) ? '250px' : '0px',
                       opacity: selectedCombo && combosData.slice(6, 12).some(c => c.id === selectedCombo.id) ? 1 : 0
                     }}>
                  {selectedCombo && combosData.slice(6, 12).some(c => c.id === selectedCombo.id) && (
                    <div className="mt-4">
                      <Card className="bg-gradient-accent text-accent-foreground p-4 shadow-glow animate-slide-down"
                            style={{
                              width: `${accordionPosition.width}px`,
                              marginLeft: `${accordionPosition.left}px`
                            }}>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-xs uppercase tracking-wider mb-1">Description</h4>
                            <p className="text-sm leading-relaxed">{selectedCombo.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-xs uppercase tracking-wider mb-1">Key Achievement</h4>
                            <p className="text-sm leading-relaxed">{selectedCombo.achievement}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        </Card>{/* End interactive content wrapper */}
      </div>
    </section>
  )
}