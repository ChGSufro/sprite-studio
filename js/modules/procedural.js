/**
 * ============================================================================
 * GENERADOR PROCEDURAL DE PIXEL ART DE "CUBOIDE" (640x256 px)
 * Dibuja las 40 celdas con estética voxel cian-turquesa, detalles naranjas
 * y contorno oscuro para que la aplicación sea 100% funcional sin archivos.
 * ============================================================================
 */

export function generarSpriteSheetProcedural() {
  const offCanvas = document.createElement('canvas');
  offCanvas.width = 640;
  offCanvas.height = 256;
  const ctx = offCanvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  // Paleta fiel a Cuboide_Vistas_Referencia
  const PAL = {
    outline: '#0d1b2a',
    cyanLight: '#48f5e0',
    cyanMain: '#19d3c5',
    cyanMid: '#0ea5b5',
    cyanDark: '#0b7a94',
    orangeLight: '#ffb703',
    orangeDark: '#fb8500',
    cheek: '#ff9e64',
    white: '#ffffff',
    red: '#f38ba8',
    yellow: '#f9e2af'
  };

  // Helper para dibujar rectángulos alineados a grilla de 2px (estilo 32x32 escalado 2x a 64x64)
  function px(ox, oy, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(ox + x * 2, oy + y * 2, w * 2, h * 2);
  }

  // Dibuja el cuerpo base de Cuboide (en coordenadas de sub-grilla 32x32)
  function dibujarCuerpoBase(ox, oy, opts = {}) {
    const yOff = opts.yOff || 0;
    const view = opts.view || 'front'; // front, back, left, right, 3qL, 3qR, top, iso
    const armPose = opts.armPose || 'relaxed';

    if (view === 'top') {
      // Vista cenital (desde arriba)
      px(ox, oy, 7, 6, 18, 20, PAL.outline);
      px(ox, oy, 8, 7, 16, 18, PAL.cyanMain);
      px(ox, oy, 9, 8, 14, 16, PAL.cyanLight);
      // Relieve de bloques escalonados arriba
      px(ox, oy, 11, 10, 10, 12, PAL.cyanMid);
      px(ox, oy, 13, 12, 6, 8, PAL.cyanLight);
      // Esquina naranja
      px(ox, oy, 8, 19, 3, 4, PAL.orangeLight);
      px(ox, oy, 9, 20, 2, 2, PAL.orangeDark);
      // Orejas laterales
      px(ox, oy, 5, 13, 2, 6, PAL.outline);
      px(ox, oy, 6, 14, 1, 4, PAL.cyanDark);
      px(ox, oy, 25, 13, 2, 6, PAL.outline);
      px(ox, oy, 25, 14, 1, 4, PAL.cyanDark);
      return;
    }

    if (view === 'iso') {
      // Vista Isométrica Voxel
      px(ox, oy, 8, 7 + yOff, 16, 18, PAL.outline);
      // Cara superior
      px(ox, oy, 10, 6 + yOff, 12, 4, PAL.cyanLight);
      px(ox, oy, 12, 5 + yOff, 8, 2, PAL.cyanLight);
      // Cara izquierda (iluminada)
      px(ox, oy, 8, 9 + yOff, 9, 14, PAL.cyanMain);
      px(ox, oy, 8, 19 + yOff, 9, 4, PAL.cyanMid);
      // Cara derecha (sombra)
      px(ox, oy, 17, 9 + yOff, 7, 14, PAL.cyanDark);
      // Esquina naranja superior
      px(ox, oy, 14, 8 + yOff, 3, 3, PAL.orangeLight);
      // Ojos isométricos
      px(ox, oy, 10, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 10, 13 + yOff, 1, 1, PAL.white);
      px(ox, oy, 14, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 14, 13 + yOff, 1, 1, PAL.white);
      px(ox, oy, 12, 15 + yOff, 2, 1, PAL.outline);
      // Pies
      px(ox, oy, 10, 24 + yOff, 3, 3, PAL.outline);
      px(ox, oy, 11, 24 + yOff, 2, 2, PAL.cyanDark);
      px(ox, oy, 17, 24 + yOff, 3, 3, PAL.outline);
      px(ox, oy, 17, 24 + yOff, 2, 2, PAL.cyanDark);
      return;
    }

    // Ancho y desplazamiento según ángulo
    let bodyX = 8, bodyW = 16;
    if (view === 'left' || view === 'right') {
      bodyX = 10; bodyW = 12;
    } else if (view === '3qL' || view === '3qR') {
      bodyX = 9; bodyW = 14;
    }

    // Bloque superior (cresta voxel)
    px(ox, oy, bodyX + 4, 4 + yOff, bodyW - 8, 2, PAL.outline);
    px(ox, oy, bodyX + 5, 5 + yOff, bodyW - 10, 1, PAL.cyanLight);

    // Contorno principal del cubo
    px(ox, oy, bodyX, 6 + yOff, bodyW, 18, PAL.outline);
    // Relleno principal cian
    px(ox, oy, bodyX + 1, 7 + yOff, bodyW - 2, 16, PAL.cyanMain);
    // Franja superior iluminada
    px(ox, oy, bodyX + 2, 7 + yOff, bodyW - 4, 2, PAL.cyanLight);
    // Franja inferior sombreada (patrón de color base)
    px(ox, oy, bodyX + 1, 20 + yOff, bodyW - 2, 3, PAL.cyanMid);

    // Detalles de relieve según vista
    if (view === 'front' || view === '3qL' || view === '3qR') {
      // Esquinas superiores naranjas
      if (view !== '3qR') px(ox, oy, bodyX + 1, 7 + yOff, 2, 2, PAL.orangeLight);
      if (view !== '3qL') px(ox, oy, bodyX + bodyW - 3, 7 + yOff, 2, 2, PAL.orangeLight);
    } else if (view === 'back') {
      // Relieve de bloques trasero
      px(ox, oy, 13, 9 + yOff, 6, 5, PAL.outline);
      px(ox, oy, 14, 10 + yOff, 4, 3, PAL.cyanMid);
    } else if (view === 'left' || view === 'right') {
      // Relieve lateral de bloques
      const relX = view === 'left' ? 10 : 16;
      px(ox, oy, relX, 10 + yOff, 5, 6, PAL.outline);
      px(ox, oy, relX + 1, 11 + yOff, 3, 4, PAL.cyanMid);
    }

    // Brazos según postura
    if (armPose === 'relaxed') {
      if (view !== 'left') {
        // Brazo derecho
        px(ox, oy, bodyX + bodyW, 12 + yOff, 3, 7, PAL.outline);
        px(ox, oy, bodyX + bodyW, 13 + yOff, 2, 5, PAL.cyanMid);
      }
      if (view !== 'right') {
        // Brazo izquierdo
        px(ox, oy, bodyX - 3, 12 + yOff, 3, 7, PAL.outline);
        px(ox, oy, bodyX - 2, 13 + yOff, 2, 5, PAL.cyanLight);
      }
    } else if (armPose === 'waving') {
      // Brazo izq relajado
      px(ox, oy, bodyX - 3, 12 + yOff, 3, 7, PAL.outline);
      px(ox, oy, bodyX - 2, 13 + yOff, 2, 5, PAL.cyanLight);
      // Brazo der saludando arriba
      px(ox, oy, bodyX + bodyW, 7 + yOff, 3, 7, PAL.outline);
      px(ox, oy, bodyX + bodyW, 7 + yOff, 2, 5, PAL.cyanMain);
      px(ox, oy, bodyX + bodyW + 1, 5 + yOff, 3, 3, PAL.cyanLight);
    } else if (armPose === 'celebration') {
      // Ambos brazos arriba
      px(ox, oy, bodyX - 3, 6 + yOff, 3, 7, PAL.outline);
      px(ox, oy, bodyX - 2, 6 + yOff, 2, 6, PAL.cyanLight);
      px(ox, oy, bodyX + bodyW, 6 + yOff, 3, 7, PAL.outline);
      px(ox, oy, bodyX + bodyW, 6 + yOff, 2, 6, PAL.cyanMain);
    } else if (armPose === 'pointing_side') {
      px(ox, oy, bodyX - 3, 13 + yOff, 3, 6, PAL.outline);
      px(ox, oy, bodyX - 2, 14 + yOff, 2, 4, PAL.cyanLight);
      // Brazo derecho horizontal
      px(ox, oy, bodyX + bodyW, 13 + yOff, 6, 3, PAL.outline);
      px(ox, oy, bodyX + bodyW, 14 + yOff, 5, 2, PAL.cyanMain);
    } else if (armPose === 'pointing_up') {
      px(ox, oy, bodyX - 3, 13 + yOff, 3, 6, PAL.outline);
      px(ox, oy, bodyX - 2, 14 + yOff, 2, 4, PAL.cyanLight);
      // Brazo derecho apuntando arriba
      px(ox, oy, bodyX + bodyW, 8 + yOff, 3, 8, PAL.outline);
      px(ox, oy, bodyX + bodyW, 8 + yOff, 2, 7, PAL.cyanMain);
    } else if (armPose === 'crossed') {
      px(ox, oy, bodyX + 2, 16 + yOff, bodyW - 4, 3, PAL.outline);
      px(ox, oy, bodyX + 3, 17 + yOff, bodyW - 6, 2, PAL.cyanDark);
    } else if (armPose === 'hands_together') {
      px(ox, oy, bodyX + 4, 15 + yOff, bodyW - 8, 3, PAL.outline);
      px(ox, oy, bodyX + 5, 16 + yOff, bodyW - 10, 2, PAL.cyanLight);
    } else if (armPose === 'swing1') {
      px(ox, oy, bodyX - 3, 10 + yOff, 3, 6, PAL.outline);
      px(ox, oy, bodyX - 2, 11 + yOff, 2, 4, PAL.cyanLight);
      px(ox, oy, bodyX + bodyW, 14 + yOff, 3, 6, PAL.outline);
      px(ox, oy, bodyX + bodyW, 15 + yOff, 2, 4, PAL.cyanMid);
    } else if (armPose === 'swing2') {
      px(ox, oy, bodyX - 3, 14 + yOff, 3, 6, PAL.outline);
      px(ox, oy, bodyX - 2, 15 + yOff, 2, 4, PAL.cyanLight);
      px(ox, oy, bodyX + bodyW, 10 + yOff, 3, 6, PAL.outline);
      px(ox, oy, bodyX + bodyW, 11 + yOff, 2, 4, PAL.cyanMid);
    }

    // Patitas cilíndricas
    if (view === 'front' || view === 'back') {
      // Izq
      px(ox, oy, 10, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 11, 24 + yOff, 2, 2, PAL.cyanDark);
      // Der
      px(ox, oy, 18, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 19, 24 + yOff, 2, 2, PAL.cyanDark);
    } else if (view === '3qL') {
      px(ox, oy, 9, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 10, 24 + yOff, 2, 2, PAL.cyanDark);
      px(ox, oy, 17, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 18, 24 + yOff, 2, 2, PAL.cyanDark);
    } else if (view === '3qR') {
      px(ox, oy, 11, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 12, 24 + yOff, 2, 2, PAL.cyanDark);
      px(ox, oy, 19, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 20, 24 + yOff, 2, 2, PAL.cyanDark);
    } else if (view === 'left' || view === 'right') {
      px(ox, oy, 14, 24 + yOff, 4, 3, PAL.outline);
      px(ox, oy, 15, 24 + yOff, 2, 2, PAL.cyanDark);
    }
  }

  // Dibuja expresiones y ojos en la cara
  function dibujarRostro(ox, oy, expr = 'happy', yOff = 0, xShift = 0) {
    const fx = xShift * 2;
    // Ojos base (rectangulares oscuros)
    if (expr === 'neutral') {
      px(ox, oy, 11 + fx, 13 + yOff, 2, 3, PAL.outline);
      px(ox, oy, 11 + fx, 13 + yOff, 1, 1, PAL.white); // Brillo
      px(ox, oy, 18 + fx, 13 + yOff, 2, 3, PAL.outline);
      px(ox, oy, 18 + fx, 13 + yOff, 1, 1, PAL.white);
      // Boquita neutral corta
      px(ox, oy, 14 + fx, 17 + yOff, 3, 1, PAL.outline);
      // Mejillas
      px(ox, oy, 9 + fx, 16 + yOff, 2, 1, PAL.cheek);
      px(ox, oy, 20 + fx, 16 + yOff, 2, 1, PAL.cheek);
    } else if (expr === 'happy') {
      // Ojos estilo arco feliz ^ ^
      px(ox, oy, 11 + fx, 13 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 10 + fx, 14 + yOff, 1, 2, PAL.outline);
      px(ox, oy, 18 + fx, 13 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 20 + fx, 14 + yOff, 1, 2, PAL.outline);
      // Sonrisa curva
      px(ox, oy, 14 + fx, 17 + yOff, 4, 1, PAL.outline);
      px(ox, oy, 13 + fx, 16 + yOff, 1, 1, PAL.outline);
      px(ox, oy, 18 + fx, 16 + yOff, 1, 1, PAL.outline);
      // Mejillas sonrosadas
      px(ox, oy, 9 + fx, 16 + yOff, 2, 1, PAL.cheek);
      px(ox, oy, 20 + fx, 16 + yOff, 2, 1, PAL.cheek);
    } else if (expr === 'sad') {
      px(ox, oy, 11 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 18 + fx, 14 + yOff, 2, 2, PAL.outline);
      // Boquita triste caída
      px(ox, oy, 14 + fx, 17 + yOff, 4, 1, PAL.outline);
      px(ox, oy, 13 + fx, 18 + yOff, 1, 1, PAL.outline);
      px(ox, oy, 18 + fx, 18 + yOff, 1, 1, PAL.outline);
    } else if (expr === 'angry') {
      // Cejas enojadas diagonales
      px(ox, oy, 11 + fx, 12 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 18 + fx, 12 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 12 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 18 + fx, 14 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 14 + fx, 18 + yOff, 4, 1, PAL.outline);
    } else if (expr === 'confused') {
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 19 + fx, 12 + yOff, 2, 3, PAL.outline);
      px(ox, oy, 14 + fx, 17 + yOff, 3, 1, PAL.outline);
      // Signo '?' flotante
      px(ox, oy, 25, 2, 3, 1, PAL.yellow);
      px(ox, oy, 27, 3, 1, 2, PAL.yellow);
      px(ox, oy, 26, 5, 1, 1, PAL.yellow);
      px(ox, oy, 26, 7, 1, 1, PAL.yellow);
    } else if (expr === 'sleepy') {
      // Ojos cerrados - -
      px(ox, oy, 11 + fx, 14 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 18 + fx, 14 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 15 + fx, 17 + yOff, 2, 1, PAL.outline);
      // Zzz
      px(ox, oy, 24, 3, 3, 1, PAL.white);
      px(ox, oy, 25, 4, 1, 1, PAL.white);
      px(ox, oy, 24, 5, 3, 1, PAL.white);
    } else if (expr === 'wink') {
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 11 + fx, 13 + yOff, 1, 1, PAL.white);
      // Guiño derecho
      px(ox, oy, 18 + fx, 14 + yOff, 3, 1, PAL.outline);
      px(ox, oy, 14 + fx, 16 + yOff, 4, 1, PAL.outline);
      px(ox, oy, 17 + fx, 15 + yOff, 1, 1, PAL.outline);
    } else if (expr === 'alert') {
      // Ojos muy abiertos + signo '!'
      px(ox, oy, 10 + fx, 12 + yOff, 4, 4, PAL.white);
      px(ox, oy, 11 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 18 + fx, 12 + yOff, 4, 4, PAL.white);
      px(ox, oy, 19 + fx, 13 + yOff, 2, 2, PAL.outline);
      px(ox, oy, 15 + fx, 17 + yOff, 2, 2, PAL.outline);
      // Signo !
      px(ox, oy, 15, 0, 2, 3, PAL.red);
      px(ox, oy, 15, 4, 2, 1, PAL.red);
    } else if (expr === 'off') {
      px(ox, oy, 11 + fx, 14 + yOff, 3, 1, PAL.cyanDark);
      px(ox, oy, 18 + fx, 14 + yOff, 3, 1, PAL.cyanDark);
    }
  }

  // --- FILA 0 (y = 0): Vistas Ortográficas y Perspectivas ---
  dibujarCuerpoBase(0, 0, { view: 'front' }); dibujarRostro(0, 0, 'happy');
  dibujarCuerpoBase(64, 0, { view: '3qL' }); dibujarRostro(64, 0, 'neutral', 0, -1);
  dibujarCuerpoBase(128, 0, { view: '3qR' }); dibujarRostro(128, 0, 'neutral', 0, 1);
  dibujarCuerpoBase(192, 0, { view: 'left' });
  dibujarCuerpoBase(256, 0, { view: 'right' });
  dibujarCuerpoBase(320, 0, { view: '3qL' });
  dibujarCuerpoBase(384, 0, { view: '3qR' });
  dibujarCuerpoBase(448, 0, { view: 'back' });
  dibujarCuerpoBase(512, 0, { view: 'top' });
  dibujarCuerpoBase(576, 0, { view: 'iso' });

  // --- FILA 1 (y = 64): Estados de Interacción ---
  dibujarCuerpoBase(0, 64, { yOff: 0 }); dibujarRostro(0, 64, 'neutral', 0);
  dibujarCuerpoBase(64, 64, { yOff: -1 }); dibujarRostro(64, 64, 'neutral', -1);
  dibujarCuerpoBase(128, 64, { yOff: -1 }); dibujarRostro(128, 64, 'alert', -1);
  dibujarCuerpoBase(192, 64, { armPose: 'celebration' }); dibujarRostro(192, 64, 'happy');
  // Procesando 1, 2, 3 (spinner arriba)
  [256, 320, 384].forEach((xPos, idx) => {
    dibujarCuerpoBase(xPos, 64);
    dibujarRostro(xPos, 64, 'neutral');
    const dotX = 13 + idx * 2;
    px(xPos, 64, dotX, 1, 2, 2, PAL.yellow);
  });
  dibujarCuerpoBase(448, 64, { yOff: -1, armPose: 'celebration' }); dibujarRostro(448, 64, 'happy', -1);
  dibujarCuerpoBase(512, 64, { yOff: 1 }); dibujarRostro(512, 64, 'off', 1);
  dibujarCuerpoBase(576, 64, { yOff: -2 }); dibujarRostro(576, 64, 'happy', -2);

  // --- FILA 2 (y = 128): Expresiones Faciales ---
  const exprList = ['neutral', 'happy', 'sad', 'angry', 'confused', 'sleepy', 'wink', 'alert', 'happy', 'confused'];
  exprList.forEach((expr, col) => {
    const ox = col * 64;
    dibujarCuerpoBase(ox, 128);
    dibujarRostro(ox, 128, expr);
  });

  // --- FILA 3 (y = 192): Poses de Brazos ---
  const armList = [
    'relaxed', 'waving', 'pointing_side', 'pointing_up', 'crossed',
    'hands_together', 'celebration', 'swing1', 'relaxed', 'swing2'
  ];
  armList.forEach((pose, col) => {
    const ox = col * 64;
    dibujarCuerpoBase(ox, 192, { armPose: pose });
    dibujarRostro(ox, 192, pose === 'celebration' || pose === 'waving' ? 'happy' : 'neutral');
  });

  return offCanvas;
}
