import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function Scene3D({ reducedMotion }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas?.parentElement
    if (!canvas || !container) return undefined

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    } catch {
      return undefined
    }

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.z = 6

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height, false)

    const accentVar = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
    const accentColor = accentVar || '#aa3bff'

    const geometry = new THREE.IcosahedronGeometry(2.2, 1)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    })
    const mesh = new THREE.Mesh(geometry, wireMaterial)
    scene.add(mesh)

    const pointsMaterial = new THREE.PointsMaterial({ color: accentColor, size: 0.045, transparent: true, opacity: 0.8 })
    const points = new THREE.Points(geometry, pointsMaterial)
    scene.add(points)

    let targetX = 0
    let targetY = 0
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect()
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener('mousemove', handlePointerMove)

    let frameId
    const animate = () => {
      mesh.rotation.y += 0.0025
      mesh.rotation.x += 0.0012
      points.rotation.y = mesh.rotation.y
      points.rotation.x = mesh.rotation.x
      camera.position.x += (targetX * 1.4 - camera.position.x) * 0.04
      camera.position.y += (-targetY * 1.4 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    if (reducedMotion) {
      renderer.render(scene, camera)
    } else {
      animate()
    }

    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
      if (reducedMotion) renderer.render(scene, camera)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      wireMaterial.dispose()
      pointsMaterial.dispose()
      renderer.dispose()
    }
  }, [reducedMotion])

  return <canvas ref={canvasRef} className="scene3d-canvas" aria-hidden="true" />
}

export default Scene3D
